# IIFE ALTERNATIVE SYNTAX

```js
const numbers = [1, 2]

(function () {
  for (const num of numbers) {
    console.log(num)
  }
})()
```

This script will crashes with the error:

```sh
TypeError: [1,2] is not a function
```

What is the reason?

This code will be interpreted as:

```js
const numbers = [1, 2](function () { xxx })()
```

The javascript engine expects a function:

```js
const numbers = functionName(function () { xxx })()
```

but gets the array [1, 2].

Notes: Using Prettier helps as reformatted code is obviously wrong.

How to fix:

- use ;
- place ; before IIFE - aka `defensive semicolon`
- use an alternative syntax - place !, +, -, ~ before IIFE

### Example of alternative syntax:

```js
const numbers = [1, 2]

!async function () {
  for await (const num of numbers) {
    console.log(num)
  }
}()
```

To my opinion this is a less error-prone syntax to use.
