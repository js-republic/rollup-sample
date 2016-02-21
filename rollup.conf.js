import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'js/main.js',
    sourceMap: true,
    format: 'umd',
    dest: 'dist/bundle.js',
    moduleName: 'rollup-sample',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
            exclude: ['node_modules/lodash-es/**']
        })
    ]
};