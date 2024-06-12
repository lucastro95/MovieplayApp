import axios from '../api'

export default usersWS = {
    deleteAccount: async function(google_id) {
        try {
            const response = await axios.delete(`users/${google_id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting account:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
}