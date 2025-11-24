import { api } from './api-client';

export interface UploadImageResponse {
  id: number;
  url: string;
  width: number;
  height: number;
}

export interface CreateTweetRequest {
  text: string;
  imageIds?: number[];
  // Add other fields as needed
}

export const TweetApi = {
  /**
   * Upload image to temporary storage (R2/S3)
   */
  uploadTweetImageTemp: (formData: FormData) => {
    return api.post<UploadImageResponse>('/media/upload', formData);
  },

  /**
   * Get tweets (feed/timeline)
   */
  getTweets: (params?: { page?: number; limit?: number }) => {
    return api.get('/tweets', { params });
  },

  /**
   * Create a new tweet
   */
  createTweet: (data: CreateTweetRequest) => {
    return api.post('/tweets', data);
  },

  /**
   * Delete temporary image (optional)
   */
  deleteTempImage: (imageId: number) => {
    return api.delete(`/api/images/${imageId}`);
  },
};
