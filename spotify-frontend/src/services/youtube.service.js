
import axios from 'axios'

const API_KEY = ''


const fetchDataFromAPI = async (type, q) => {
    try {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 15,
                q: q,
                type: type,
                key: API_KEY
            }
        });
        return response.data.items.slice(1)
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return []; 
    }
};

const getVideoDetails = async (videoIds) => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,contentDetails',
                id: videoIds.join(','),
                key: API_KEY
            }
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching video details:', error);
        return [];
    }
};

export const youtubeService = {
    fetchDataFromAPI,
    getVideoDetails
}