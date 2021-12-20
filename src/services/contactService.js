import { makePostRequest } from "../helpers/serverCommunication.js";
import { contact } from "../constants.js";

export async function send(name, email, phone, message) {
        console.log('sending');
        const result = await makePostRequest(contact, { name, email, phone, message });
        console.log('sent');
        return result;
};