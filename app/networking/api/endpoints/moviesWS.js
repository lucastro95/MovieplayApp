import axios from '../api'

export default moviesWS = {
    signIn: async function() {
        const response = await axios.get('movies/signIn');
        return response.data;
    },
    getMovies: async function({language, input = null, release = null, rating = null, page = 1}) {
        let response;
        if (input === null) {
            response = await axios.get(`movies?language=${language}&page=${page}`);
        } else {
            if(release === null && rating === null) {
                response = await axios.get(`movies?language=${language}&search=${input}&page=${page}`);
            } else {
                response = await axios.get(`movies?language=${language}&search=${input}&orderBy=release_date:${release},vote_average:${rating}&page=${page}`);
            }
        }
        return response.data;
    }
}
