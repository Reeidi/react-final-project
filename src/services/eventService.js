import { makeGetRequest } from "../helpers/serverCommunication.js";
import { events } from "../constants.js";

export async function getAll() {
    const result = await makeGetRequest(events);
    return result;
};