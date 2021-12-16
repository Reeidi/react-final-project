import { makePostRequest } from "../helpers/serverCommunication.js";
import { loginUserUrl, registerUserUrl } from "../constants.js";

export async function register(firstName, lastName, email, age, password, repeatPassword) {
    const result = await makePostRequest(registerUserUrl, { firstName, lastName, email, age, password, repeatPassword });
    if (result.hasOwnProperty('success')) {
        return result.success;
    }

    return false;
};

export async function login(email, password) {
    const result = await makePostRequest(loginUserUrl, { email, password });

    if (result.hasOwnProperty('user') && result.hasOwnProperty('token')) {
        let userInfo = {
            _id: result.user._id,
            email: result.user.email,
            name: result.user.firstName,
            token: result.token
        };

        return userInfo;
    }

    return null;
};

export function getAuthToken() {
    let item = localStorage.getItem('user');
    if (item) {
        let user = JSON.parse(item)
        return user.token;
    }

    return '';
}