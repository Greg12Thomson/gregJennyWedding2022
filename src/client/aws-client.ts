import Amplify, { API } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const apiName = "rspvApi"
const path = '/rsvp';
const myInit = {
    headers: {
        "Content-Type": "application/json"
    },
    queryStringParameters: {
        limit: "10"
    },
};

export const getData = () => {
    API
        .get(apiName, path, myInit)
        .then((response: any) => {
            return response.Items;
        })
        .catch((error: any) => {    
            console.error("Failed to get data from DB: " + error);
        });
}

export interface PutDataProps {
    name: string;
    email: string;
    attending: boolean;
    song?: String;
    plusOne?: boolean;
    guestName?: String;
}

export const postData = async (body: PutDataProps) => {
    const payload = {...myInit, body};

    return await API.post(apiName, path, payload);
}