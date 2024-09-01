
import axios from 'axios';

const API_KEY = '98bbccb9ccd94f70a630d7fddbd60dff';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchHealthNews = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params:{
        category: category,
        apiKey: '98bbccb9ccd94f70a630d7fddbd60dff',
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching health news", error);
    return [];
  }
};
