/**
 * Imperative Programming (How to do)
 * Imperative programming is a programming style that tells
 * the computer how to accomplish some task. We have to code
 * using a lot of loops and conditionals and we determine the
 * flow, accounting for everything.
 *
 * Declarative Programming (What to do)
 * Declarative programming expresses the logic of a program
 * without identifying the `control flow`. Control flow is
 * abstracted away, so declarative code only needs to specify
 * what to do.
 */

// This is an example of Imperative Programming:
let result;
for (let i = 0; i < fns.length; i++) {
  if (i === 0) {
    result = fns[i](x);
  }
  result = fns[i](result);
}
return result;

// This is an example of Declarative Programming:
return fns.reduce(function (v, f) {
  return f(v);
}, x);
