export type KeyOf<T> = keyof T;

export type NotIterable<T> = T extends Iterable<unknown> ? never : T;
