import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default {
	input: "src/index.js",
	output: [
		{
			file: pkg.main,
			format: "cjs"
		}
	],
	plugins: [
		babel({
			exclude: "node_modules/**",
			presets: ["@babel/preset-react"]
		}),
		postcss({
			extensions: [".css"]
		}),
		resolve(),
		commonjs(),
		terser()
	],
	external: ["react", "react-dom"]
};
