import axios from "axios";
export const serverURL = 'https://api5.buzz2web.in';
//  export const serverURL = 'http://localhost:5005';
//  export const serverURL='https://dfba-223-229-217-165.ngrok-free.app';

export const getData = async (url) => {
    try {
        var response = await fetch(`${serverURL}/${url}`)
        var result = await response.json()
        return (result)
    }
    catch (e) {
        return (null)
    }
}

export const postData = async (url, body, isFile = false) => {
    try {
        const headers = {
            headers: {
                "const-type": isFile ? "mutipath/from-data" : "application/json",

            }
        }

        var response = await axios.post(`${serverURL}/${url}`, body, headers)
        var result = await response.data
        return (result)
    }
    catch (error) {
        return (false)
    }
}