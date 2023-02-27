import { buildResponse, validateResponse, validateStatusCode } from "../../../lib/backend/utils/utils";

describe('Utils: buildResponse', () => {
    it('should return a valid response', () => {
        const response = buildResponse(200, {message: "Hello World"});
        expect(validateResponse(response.statusCode, response.body)).toBe(true);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe(JSON.stringify({message: "Hello World"}));
    });

});