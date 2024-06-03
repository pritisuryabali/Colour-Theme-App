import axios from 'axios';


export const getUserPreference = async (userId) => {
    try {
        const response = await axios.get(`/api/preferences/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const saveUserPreference = async (userId, color) => {
    try {
        const response = await axios.post(`/api/preferences/${userId}`, { color });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
    }
};
