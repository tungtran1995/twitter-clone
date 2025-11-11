import streamlit as st
import cv2
from ultralytics import YOLO
from PIL import Image
import numpy as np
import tempfile

st.set_page_config(page_title="Helmet Detection", page_icon="🏍️", layout="wide")

# Load model
@st.cache_resource
def load_model():
    return YOLO('runs/detect/helmet_detection/weights/best.pt')

model = load_model()

st.title("🏍️ Hệ thống phát hiện vi phạm không đội mũ bảo hiểm")
st.markdown("---")

# Sidebar
with st.sidebar:
    st.header("⚙️ Cài đặt")
    conf_threshold = st.slider("Confidence threshold", 0.0, 1.0, 0.5, 0.05)
    st.markdown("---")
    st.info("📊 Classes:\n- 🔴 Không đội mũ\n- 🟢 Có đội mũ")

# Main tabs
tab1, tab2, tab3 = st.tabs(["📷 Ảnh", "🎥 Video", "📹 Webcam"])

# Tab 1: Image detection
with tab1:
    st.header("Upload ảnh để phát hiện")
    uploaded_file = st.file_uploader("Chọn ảnh...", type=['jpg', 'jpeg', 'png'])
    
    if uploaded_file:
        image = Image.open(uploaded_file)
        img_array = np.array(image)
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("Ảnh gốc")
            st.image(image, use_container_width=True)
        
        with st.spinner("Đang xử lý..."):
            results = model.predict(img_array, conf=conf_threshold)
            annotated = results[0].plot()
            
            # Count violations
            boxes = results[0].boxes
            no_helmet = sum(1 for box in boxes if int(box.cls[0]) == 0)
            with_helmet = sum(1 for box in boxes if int(box.cls[0]) == 1)
        
        with col2:
            st.subheader("Kết quả")
            st.image(annotated, channels="BGR", use_container_width=True)
        
        # Statistics
        st.markdown("---")
        col_stat1, col_stat2, col_stat3 = st.columns(3)
        col_stat1.metric("🔴 Vi phạm (Không mũ)", no_helmet)
        col_stat2.metric("🟢 An toàn (Có mũ)", with_helmet)
        col_stat3.metric("📊 Tổng phát hiện", no_helmet + with_helmet)

# Tab 2: Video detection
with tab2:
    st.header("Upload video để phát hiện")
    video_file = st.file_uploader("Chọn video...", type=['mp4', 'avi', 'mov'])
    
    if video_file:
        tfile = tempfile.NamedTemporaryFile(delete=False)
        tfile.write(video_file.read())
        
        cap = cv2.VideoCapture(tfile.name)
        stframe = st.empty()
        
        total_violations = 0
        frame_count = 0
        
        process_video = st.button("▶️ Xử lý video")
        
        if process_video:
            progress_bar = st.progress(0)
            total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            
            while cap.isOpened():
                ret, frame = cap.read()
                if not ret:
                    break
                
                frame_count += 1
                
                # Process every 3rd frame for speed
                if frame_count % 3 == 0:
                    results = model.predict(frame, conf=conf_threshold, verbose=False)
                    annotated = results[0].plot()
                    
                    boxes = results[0].boxes
                    no_helmet = sum(1 for box in boxes if int(box.cls[0]) == 0)
                    total_violations += no_helmet
                    
                    stframe.image(annotated, channels="BGR", use_container_width=True)
                    progress_bar.progress(frame_count / total_frames)
            
            cap.release()
            st.success(f"✅ Hoàn thành! Tổng vi phạm phát hiện: {total_violations}")

# Tab 3: Webcam
with tab3:
    st.header("Phát hiện real-time từ webcam")
    st.info("⚠️ Chức năng này cần chạy local. Streamlit Cloud không hỗ trợ webcam.")
    
    run_webcam = st.checkbox("Bật webcam")
    
    if run_webcam:
        stframe = st.empty()
        cap = cv2.VideoCapture(0)
        
        stop_button = st.button("⏹️ Dừng")
        
        while not stop_button:
            ret, frame = cap.read()
            if not ret:
                st.error("Không thể truy cập webcam")
                break
            
            results = model.predict(frame, conf=conf_threshold, verbose=False)
            annotated = results[0].plot()
            stframe.image(annotated, channels="BGR", use_container_width=True)
        
        cap.release()

st.markdown("---")
st.caption("Developed with ❤️ using YOLOv8 + Streamlit")