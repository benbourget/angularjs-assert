# Description

AngularJS assert module provides a set of assertion functions for verifying invariants.

# Install

Include the file is HMTL

```html
<script src="/node_modules/@contasystemer/angularjs-assert/src/angularjs-assert.js"></script>
```

or require the file

```js
require('@contasystemer/angularjs-assert');
```

# Usage

```js
csAssert.ok(angular.isObject(result), 'Result should be an object');
```

It's an equvivalent of:

```js
if (angular.isObject(result) === false) {
    throw new Error('Result should be an object');
}
```

---

![Conta AS](/assets/conta-logo.png)