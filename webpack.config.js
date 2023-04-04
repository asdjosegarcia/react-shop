const { plugins } = require('@babel/preset-env/lib/plugins-compat-data')
const path = require('path') //hace referencia a donde se ejecuta la app, en este caso esta pc
const HtmlWebpackplugin = require('html-webpack-plugin') //llamamos a el plugin que ya habiamos instalado
const MiniCssExtractPlugin= require('mini-css-extract-plugin')



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/' /* para evitar problemas con las rutas? */
    },
    mode: 'development',

    /*     stats: {
            errorDetails: true,
          }, */
    resolve: {//extenciones que tiene el proyecto de entrada
        extensions: ['.js', '.jsx'],//extenciones que intentara resolver primero
        alias: {//sirven para cuadno quieramos llamar a un directorio, con el alias es mas rapido
            //aqui vana quedando los directorios que necesitamos para el proyecto
            '@components': path.resolve(__dirname, 'src/components/'),//path.resolve va a ir a __dirname(esta carpeta) y va a buscar a src/components
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'), //cuando escribamos @icons en un jsx hacemos referencia a esta ruta
            '@logos':path.resolve(__dirname,'src/assets/logos/')
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
                test:/\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(png|svg|jp(e*)g|gif)$/,
                type:'asset'
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
    devServer:{
       historyApiFallback:true,
    }
}






