import { buildResponse } from "./utils/utils";

export const handler = async(event: any) => {
    console.log('Request Event : ', event);
    let response;
    response = buildResponse(200, { message: 'Hello World'});
    return response;
};