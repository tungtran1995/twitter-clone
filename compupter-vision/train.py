from ultralytics import YOLO
import torch

# Check GPU
device = 'cuda' if torch.cuda.is_available() else 'cpu'
print(f"Using device: {device}")

# Load pretrained YOLOv8 model
model = YOLO('yolov8n.pt')  # nano version for faster training

# Train
results = model.train(
    data='data/dataset.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    name='helmet_detection',
    device=device,
    patience=20,
    save=True,
    plots=True
)

# Validate
metrics = model.val()
print(f"mAP50: {metrics.box.map50}")
print(f"mAP50-95: {metrics.box.map}")

# Export best model
model = YOLO('runs/detect/helmet_detection/weights/best.pt')
model.export(format='onnx')
print("Training complete! Best model saved.")