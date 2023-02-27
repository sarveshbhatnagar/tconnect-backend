// TODO - remove this validation from here.
const validateStatusCode = (statusCode: number) => {
    if (!statusCode) {
        return false;
    }
    if (isNaN(statusCode)) {
        return false;
    }
    return true;
}

const validateResponse = (statusCode: number, body: any) => {
    if (!validateStatusCode(statusCode)) {
        return false;
    }
    return true;
    
}

function buildResponse(statusCode: number, body: any){
    if(!validateResponse(statusCode, body)){
        throw new Error("Build Response parameters are invalid" + statusCode + body);
    }

    return {
        isBase64Encoded: false,
        statusCode: statusCode,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}


export {buildResponse, validateStatusCode, validateResponse}

