import { makeGetRequest, makePostRequest } from "../helpers/serverCommunication.js";
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

export function getAuthToken() {
    return '';
}