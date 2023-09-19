export default [
  {
    input: "./src/webglk.js",
    output: [
      {
        file: "./app/webglk.esm.js",
        format: "esm",
      },
      {
        file: "./app/webglk.cjs.js",
        format: "cjs",
      },
    ],
  },
  {
    input: "./src/glkjs.js",
    output: {
      file: "./app/glkapi.cjs.js",
      format: "cjs",
    },
  },
];
