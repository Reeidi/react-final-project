import { makeGetRequest, makePostRequest } from "../helpers/serverCommunication.js";
import { loginUserUrl, logoutUserUrl, registerUserUrl } from "../constants.js";

export async function register(firstName, lastName, email, age, password, repeatPassword) {
    const result = await makePostRequest(registerUserUrl, { firstName, lastName, email, age, password, repeatPassword });

    // if (result.hasOwnProperty('accessToken')) {
    //     localStorage.setItem('userId', result._id);
    //     localStorage.setItem('email', result.email);
    //     localStorage.setItem('authToken', result.accessToken);
    //     localStorage.setItem('userInfo', JSON.stringify(result));
    // }

    return result;
};

export async function login(email, password) {
    const result = await makePostRequest(loginUserUrl, { email, password });

    if (result.hasOwnProperty('user')) {
        let userInfo = {
            _id: result.user._id,
            email: result.user.email,
            name: result.user.firstName
        };

        return userInfo;
    }

    return null;
};

export async function logout() {
    await makeGetRequest(logoutUserUrl, true);
};

export function getAuthToken() {
    return '';
}