export const ssr = false;

export function load() {
  //Fetch data from API/Database...
  console.log("Load Calling");

  return {
    appName: "Task Manager",
    content: "Board"
  };
}
