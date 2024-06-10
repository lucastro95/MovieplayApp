import axios from '../api'

export default moviesWS = {
    signIn: async function() {
        const response = await axios.get('movies/signIn');
        return response.data;
    }
}