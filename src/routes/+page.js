export const ssr = false;

export function load() {
  console.log("Calling load!");
  return {
    test1: "Hello World",
    test2: 100
  };
}
