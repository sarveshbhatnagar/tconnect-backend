import { Greeting } from "../../lib/backend";

describe('Backend', () => {

  it('should create proper greeting', () => {
    const greeting = new Greeting('Hello, world!');
    expect(greeting.greet()).toBe('Hello, world!');
  });
});