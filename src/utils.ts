export function hash(target: object) {
  return JSON.stringify(target);
}

export const AsyncFunction = async function() {}.constructor;

export function isAsyncOrPromise(fn: any) {
  return fn instanceof Promise || fn instanceof AsyncFunction;
}
