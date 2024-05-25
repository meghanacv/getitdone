import { writable } from "svelte/store";

function createStore() {
  const taskList = writable([]);
  let i = 0;

  setInterval(() => {
    taskList.set([1, 2, 3]);
    taskList.update((list) => [...list, i++]);
  }, 2000);

  return taskList;
}

export const taskListStore = createStore();
