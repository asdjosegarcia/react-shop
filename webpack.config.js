const { plugins } = require('@babel/preset-env/lib/plugins-compat-data')
const path= require ('path') //hace referencia a donde se ejecuta la app, en este caso esta pc
const HtmlWebpackplugin=require('html-webpack-plugin') //llamamos a el plugin que ya habiamos instalado

module.exports={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',

    },
    resolve:{
        extencions:['js','.jsx'],//

    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
            template:'./public/index.html'
        })
    ]
}






