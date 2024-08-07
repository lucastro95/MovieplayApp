import axios from '../api';

const moviesWS = {
    signIn: async function() {
        const response = await axios.get('movies/signIn');
        return response.data;
    },
    getMovies: async function({ language, input = null, release = null, rating = null, page = 1, genre = null }) {
        let response;

        if (input === null) {
            if (genre === null) {
                response = await axios.get(`movies?language=${language}&page=${page}`);
            } else {
                response = await axios.get(`movies?language=${language}&page=${page}&genre=${genre}`);
            }
        } else {
            if (release === null && rating === null) {
                response = await axios.get(`movies?language=${language}&search=${input}&page=${page}`);
            } else {
                response = await axios.get(`movies?language=${language}&search=${input}&orderBy=release_date:${release},vote_average:${rating}&page=${page}`);
            }
        }

        return response.data;
    },
    getMovieById: async function({ movieId, userId, language }) {
        const response = await axios.get(`http://184.72.166.63:3000/movies/${movieId}/${userId}?language=${language}`);       
        return response.data;
    },
    rateMovie: async function(movieId, userId, rate) {
        const response = await axios.post(`http://184.72.166.63:3000/movies/${movieId}/${userId}?rating=${rate}`)
        console.log(response.data);
        return response.data;
    }
}

export default moviesWS;
