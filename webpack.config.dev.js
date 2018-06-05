import path from 'path';

export default {
    // debug: true,
    // noInfo: false,
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'buildScripts/index.js')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    // module: {
    //     loaders: [
    //         {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
    //         {test: /\.css$/, loaders: ['style','css']}
    //     ]
    // }
}
