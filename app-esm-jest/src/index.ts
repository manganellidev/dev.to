import helloMsg, { namedExport } from "./main/main.js";

export const run = () => {
  console.log(helloMsg("Alex"));
  console.log(namedExport());
};

run();
