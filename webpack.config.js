/**
 * Author：likon
 * Create Date：2017/1/16
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */ 
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:"build",
        publicPath:"/build/"
    },
    module:{
        loaders:[
            {test:/\.jsx?$/,loader:"babel-loader",exclude:"node_modules"}
        ]
    }
}