import axios from '../api'

export default loginWS = {
    postLogin: async function(userInfo) {
        const {givenName, familyName, email, photo, id} = userInfo;

        const requestBody = {
            "name": `${givenName}`,
            "lastname": `${familyName}`,
            "nickname": `${givenName[0].toUpperCase()}${familyName[0].toUpperCase()}`,
            "email": `${email}`,
            "googleId": `${id}`,
            "fotoPerfil": `${photo}`
        };

        const response = await axios.post('/login', requestBody);

        return response.data;
    }

}