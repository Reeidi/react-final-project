import { makeGetRequest, makePostRequest } from "../helpers/serverCommunication.js";
import { createDrawingUrl } from "../constants.js";

export async function create(title, description, imageUrl, author) {
    const result = await makePostRequest(createDrawingUrl, { title, description, imageUrl, author }, true);
    if (result.hasOwnProperty('success')) {
        return result.success;
    }

    return false;
};