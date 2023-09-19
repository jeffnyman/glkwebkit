import babel from "@rollup/plugin-babel";

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
    watch: {
      include: "./src/**",
      clearScreen: false,
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
        presets: [
          [
            "@babel/preset-env",
            {
              modules: "auto",
              targets: {
                browsers: "defaults",
              },
            },
          ],
        ],
      }),
    ],
  },
  {
    input: "./src/glkjs.js",
    output: {
      file: "./app/glkapi.cjs.js",
      format: "cjs",
    },
    watch: {
      include: "./src/**",
      clearScreen: false,
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
        presets: [
          [
            "@babel/preset-env",
            {
              modules: "auto",
              targets: {
                node: "current",
              },
            },
          ],
        ],
      }),
    ],
  },
];
