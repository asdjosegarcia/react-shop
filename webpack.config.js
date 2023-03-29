const { plugins } = require('@babel/preset-env/lib/plugins-compat-data')
const path = require('path') //hace referencia a donde se ejecuta la app, en este caso esta pc
const HtmlWebpackplugin = require('html-webpack-plugin') //llamamos a el plugin que ya habiamos instalado
const MiniCssExtractPlugin= require('mini-css-extract-plugin')



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',

    /*     stats: {
            errorDetails: true,
          }, */
    resolve: {//extenciones que tiene el proyecto de entrada
        extensions: ['.js', '.jsx'],//extenciones que intentara resolver primero
        alias: {//sirven para cuadno quieramos llamar a un directorio, con el alias es mas rapido
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test:/\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
/*     devServer:{
        contentBase: path.join(__dirname,'dist'),
        compress:true,
        port:3005
    } */
}






