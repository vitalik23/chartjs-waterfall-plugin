import { terser } from "rollup-plugin-terser";

const inputFile = "src/chartjs-plugin-waterfall.js";

export default [
  {
    input: inputFile,
    output: {
      file: "dist/chartjs-plugin-waterfall.js",
      format: "umd",
      name: "WaterfallPlugin",
    },
  },
  {
    input: inputFile,
    output: {
      file: "dist/chartjs-plugin-waterfall.min.js",
      format: "umd",
      name: "WaterfallPlugin",
    },
    plugins: [terser()],
  },
];
