import { handler } from "../../lib/backend";
import { buildResponse } from "../../lib/backend/utils/utils";

describe('Handler Invocation Test', () => {
  it('should invoke the handler', async () => {
    const result = await handler({"Event": "Test"});
    expect(result).toStrictEqual(buildResponse(200, { message: 'Hello World'}));
  });
});