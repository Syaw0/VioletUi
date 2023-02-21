#!/usr/bin/env node
const rollup = require("rollup");
const path = require("path");
const resolve = require("@rollup/plugin-node-resolve").default;
const babel = require("@rollup/plugin-babel").default;
const postcss = require("rollup-plugin-postcss");

const cwd = process.cwd();
const { main, name } = require(path.join(cwd, "package.json"));

const inputPath = path.join(cwd, main);
const fileName = name.replace("@violetui/", "");

const inputOpt = {
  input: inputPath,
  external: ["react"],
  plugins: [
    postcss({ modules: true }),
    resolve(),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      babelHelpers: "bundled",
    }),
  ],
};

const outputOpt = [
  { file: `dist/${fileName}.cjs.js`, format: "cjs" },
  { file: `dist/${fileName}.esm.js`, format: "esm" },
];

async function build() {
  const bundle = await rollup.rollup(inputOpt);
  outputOpt.forEach(async (op) => {
    await bundle.write(op);
  });
}

build();
