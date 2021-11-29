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

interface PutDataProps {
    firstName: string;
    lastName: string;
    email: string;
    attending: boolean;
    song: String;
    plusOne: boolean;
    firstNamePlusOne?: String;
    lastNamePlusOne?: String;
}

export const postData = (body: PutDataProps) => {
    const payload = {...myInit, body};
    API
        .post(apiName, path, payload)
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => {
            console.error("Failed to put data from DB: " + error);
            return error;
        });
}


