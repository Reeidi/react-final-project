import { makeGetRequest, makePostRequest } from "../helpers/serverCommunication.js";
import { loginUserUrl, logoutUserUrl, registerUserUrl } from "../constants.js";

export async function register(firstName, lastName, email, age, password, repeatPassword) {
    const result = await makePostRequest(registerUserUrl, { firstName, lastName, email, age, password, repeatPassword });

    if (result.hasOwnProperty('accessToken')) {
        sessionStorage.setItem('userId', result._id);
        sessionStorage.setItem('email', result.email);
        sessionStorage.setItem('authToken', result.accessToken);
        sessionStorage.setItem('userInfo', JSON.stringify(result));
    }

    return result;
};

export async function login(email, password) {
    const result = await makePostRequest(loginUserUrl, { email, password });

    if (result.hasOwnProperty('accessToken')) {
        sessionStorage.setItem('userId', result._id);
        sessionStorage.setItem('email', result.email);
        sessionStorage.setItem('authToken', result.accessToken);
        sessionStorage.setItem('userInfo', JSON.stringify(result));
    }

    return result;
};

export async function logout() {
    const result = await makeGetRequest(logoutUserUrl, true);

    if (result.ok === true) {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userInfo');
    }

    return result;
};

export function getCurrentUserId() {
    return sessionStorage.getItem('userId');
};

export function getCurrentUserEmail() {
    return sessionStorage.getItem('email');
};

export function getAuthToken() {
    return sessionStorage.getItem('authToken');
}

export function getCurrentUserInfo() {
    return JSON.parse(sessionStorage.getItem('userInfo'));
}