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
    },

    getUser: async function(google_id) {
        const response = await axios.get(`users/${google_id}`);
        return response.data;
    },

    editUser: async function(user) {
        const {givenName, familyName, nickName, email, photo, id} = user

        const requestBody = {
            "id": `${id}`,
            "name": `${givenName}`,
            "lastname": `${familyName}`,
            "nickname": `${nickName}`,
            "email": `${email}`,
            "photo": `${photo}`
        };

        const response = await axios.put(`users/${id}`, requestBody);

        return response.data;
    }
}