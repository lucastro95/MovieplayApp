import axios from '../api'

export default moviesWS = {
    signIn: async function() {
        const response = await axios.get('movies/signIn');
        return response.data;
    },
    getMovies: async function({language, }) {
        const response = await axios.get(`/movies?language=${language}&search=inception&orderBy=release_date:asc,rating:desc`)
    }
}