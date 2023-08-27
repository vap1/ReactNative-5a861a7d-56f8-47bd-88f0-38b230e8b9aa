
import axios from 'axios';
import { User } from '../types/UserTypes';
import { DataDisplayRequest, DataDisplayResponse } from '../types/DataDisplayApiTypes';

const BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

export const getDataDisplay = async (): Promise<DataDisplayResponse> => {
  try {
    const response = await axios.get<DataDisplayResponse>(`${BASE_URL}/data-display`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data display');
  }
};