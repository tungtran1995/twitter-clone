import { TweetApi } from '@/lib/tweet-api';
import { create } from 'zustand';

export interface ImagePreview {
  id: string; // Temporary ID for UI
  src: string; // Object URL for preview
  file: File; // Original file
  uploadedId?: number; // Server image ID after upload
  uploading?: boolean; // Upload in progress
  error?: string; // Error message if upload failed
}

interface UploadImageStore {
  images: ImagePreview[];
  addImages: (files: File[]) => Promise<void>;
  removeImage: (id: string) => void;
  clearImages: () => void;
  getUploadedImageIds: () => number[];
  isUploading: () => boolean;
}

export const useUploadImageStore = create<UploadImageStore>((set, get) => ({
  images: [],

  // Upload multiple images
  addImages: async (files: File[]) => {
    // Create preview objects
    const newImages: ImagePreview[] = files.map(file => ({
      id: Math.random().toString(36).substring(2),
      src: URL.createObjectURL(file),
      file,
      uploading: true,
    }));

    // Add to state immediately for preview
    set(state => ({ images: [...state.images, ...newImages] }));

    // Upload each image in background
    for (const image of newImages) {
      try {
        const formData = new FormData();
        formData.append('images', image.file);

        // Upload to server (R2/S3)
        const response = await TweetApi.uploadTweetImageTemp(formData);
        console.log('📦 FULL Upload Response Data:', JSON.stringify(response.data, null, 2));
        
        const data = response.data;
        // Handle if data is array (since we use upload.array)
        // Check if data is wrapped in "data" property or is direct array
        const actualData = Array.isArray(data) ? data : (data as any).data || data;
        const uploadedImage = Array.isArray(actualData) ? actualData[0] : actualData;
        
        console.log('🖼️ Extracted Image Data:', uploadedImage);

        // Update with server response
        set(state => ({
          images: state.images.map(img =>
            img.id === image.id
              ? { ...img, uploadedId: uploadedImage.id, uploading: false }
              : img
          ),
        }));
      } catch (error: any) {
        console.error('Upload failed:', error);
        
        // Mark error or remove image
        set(state => ({
          images: state.images.map(img =>
            img.id === image.id
              ? { ...img, uploading: false, error: error.message || 'Upload failed' }
              : img
          ),
        }));
      }
    }
  },

  // Remove image by ID
  removeImage: (id: string) => {
    set(state => ({
      images: state.images.filter(img => img.id !== id),
    }));
  },

  // Clear all images
  clearImages: () => {
    set({ images: [] });
  },

  // Get uploaded image IDs (for tweet submission)
  getUploadedImageIds: () => {
    return get()
      .images.filter(img => img.uploadedId)
      .map(img => img.uploadedId!);
  },

  // Check if any image is uploading
  isUploading: () => {
    return get().images.some(img => img.uploading);
  },
}));
