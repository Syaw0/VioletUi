#!/usr/bin/env node
const rollup = require("rollup");
const path = require("path");
const resolve = require("@rollup/plugin-node-resolve").default;
const babel = require("@rollup/plugin-babel").default;
const postcss = require("rollup-plugin-postcss");
const typescript = require("@rollup/plugin-typescript");

const cwd = process.cwd();
const { src, name } = require(path.join(cwd, "package.json"));

const inputPath = path.join(cwd, src);
const fileName = name.replace("@violetui/", "");
const inputOpt = {
  input: inputPath,
  external: ["react"],
  plugins: [
    typescript({
      typescript: require("typescript"),

      compilerOptions: {
        sourceMap: true,
        declarationDir: cwd + "/d",
      },
    }),
    resolve(),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    postcss({ modules: true }),
  ],
};

const outputOpt = [
  { file: `dist/${fileName}.cjs.js`, format: "cjs", sourcemap: true },
  { file: `dist/${fileName}.esm.js`, format: "esm", sourcemap: true },
];

async function build() {
  const bundle = await rollup.rollup(inputOpt);
  outputOpt.forEach(async (op) => {
    await bundle.write(op);
  });
}

build();
