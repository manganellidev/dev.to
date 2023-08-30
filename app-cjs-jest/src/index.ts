import main from "@App/main/main";

export const run = () => {
  console.log(main.helloMsg("Alex"));
  console.log(main.namedExport());
};

run();
