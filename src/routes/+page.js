export const prerender = false;

export function load() {
  const randomNum = Math.floor(Math.random() * 10);
  console.log("Calling load!");
  return {
    test1: "Hello World",
    test2: randomNum
  };
}
