# Generic Types

Some generic types for TypeScript.

## Installation

```bash
npm install --save-dev @gmjs/generic-types
```

## Types

See more at [src/types](src/types).

```ts
// generic
KeyOf<T>
NotIterable<T>

// function
Fn1<T, R>
Fn2<T1, T2, R>
Fn3<T1, T2, T3, R>
Fn4<T1, T2, T3, T4, R>

// object
EmptyObject
AnyObject

// container
Pair<K, V>
```
