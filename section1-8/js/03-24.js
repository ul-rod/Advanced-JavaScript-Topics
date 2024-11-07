/**
 * 3.24
 * Review: Invoking functions and `this`
 * -------------------------------------------
 * 1) Regular function, i.e., function_name();
 *    `this` is set to the Global Object unless you are using Strict Mode
 *    and then `this` is set to "undefined"
 *
 * 2) Method - defined and invoked as part of an object
 *    `this` is bound to that object
 *
 * 3) Constructor - invoked using the "new" keyword, creating a new object
 *    `this` is bound to the new object
 *
 * 4) Invoke functions indirectly using `call()` and `apply()`
 *    The first argument is the object that you want to bind `this` to
 *
 * 5) Creating a new function using `bind()` allows you to specify the
 *    value of `this` as the first parameter
 *
 * 6) Arrow functions - steps outside the default way that JavaScript
 *    determines the value of `this`. Arrow functions determine the
 *    value of `this` lexically
 *
 * 7) Callback functions - lose the value of `this` - so we can overcome
 *    that issue using `bind()` and Arrow functions
 */
