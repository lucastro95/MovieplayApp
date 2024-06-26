import axios from '../api'

export default loginWS = {
    postLogin: async function(userInfo) {
        const {givenName, familyName, nickName, email, photo, id} = userInfo;

        const requestBody = {
            "name": `${givenName}`,
            "lastname": `${familyName}`,
            "nickname": `${nickName ? nickName : givenName[0].toUpperCase()}${familyName[0].toUpperCase()}`,
            "email": `${email}`,
            "googleId": `${id}`,
            "fotoPerfil": `${photo}`
        };

        const response = await axios.post('/login', requestBody);

        return response.data;
    },
    postToken: async function(token) {
        const requestBody = {
            "token": `${token}`
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.post('/login/token', requestBody, config);

        return response.data
    }
}