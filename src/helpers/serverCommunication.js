import * as userService from "../services/userService.js";

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            return await response.json();
        } catch (err) {
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

function getOptions(method, body, needsAuth = false) {
    const options = {
        method,
        headers: {}
    };

    if (needsAuth === true) {
        const token = userService.getAuthToken();
        if (token != null) {
            options.headers['X-Authorization'] = token;
        }
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function makeGetRequest(url, needsAuth = true) {
    return await request(url, getOptions('get', undefined, needsAuth))
}

export async function makePostRequest(url, data, needsAuth = true) {
    return await request(url, getOptions('post', data, needsAuth));
}

export async function makePutRequest(url, data, needsAuth = true) {
    return await request(url, getOptions('put', data, needsAuth));
}

export async function makeDeleteRequest(url, needsAuth = true) {
    return await request(url, getOptions('delete', undefined, needsAuth));
}