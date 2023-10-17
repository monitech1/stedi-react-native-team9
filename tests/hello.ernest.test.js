import {sayHello, sayName} from '../utils/helloworld.ernest.js';
import assert from "assert";

//Manual testing

  it('testing sendHello function', () => {
    const result = sayHello();
    assert.equal(result,'hello');

  });

// Automated Unit Tests

it('should say Ernest', () => {
    const myName = sayName();
    console.log(myName);
    expect(myName).toBe('Ernest');

});
