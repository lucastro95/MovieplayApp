import axios from '../api'

export default moviesWS = {
    signIn: async function() {
        const response = await axios.get('movies/signIn');
        return response.data;
    },
    getMovies: async function({language, search = null, release = null, rating = null}) {
        const response = await axios.get(`/movies?language=${language}`)
        return response.data
    }
}