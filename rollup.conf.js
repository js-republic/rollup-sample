import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'js/main.js',
    sourceMap: true,
    format : 'umd',
    dest: 'dist/bundle.js',
    moduleName: 'rollupStarterProject',
    plugins: [
        //babel(),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        })/*,
        commonjs({
            include: 'node_modules/!**',
            //exclude: [ 'node_modules/foo/!**', 'node_modules/bar/!**' ],

            // search for files other than .js files (must already
            // be transpiled by a previous plugin!)
            extensions: [ '.js', '.coffee' ] // defaults to [ '.js' ]
        })*/
    ]
};