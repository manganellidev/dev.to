const helloMsg = (name: string) => {
  return `Hello, ${name}!`;
};

const namedExport = () => "Hello, from namedExport func!";

export default {
  helloMsg,
  namedExport,
};
