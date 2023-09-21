const path = require('path');

module.exports = {
  // 环境
  mode: 'none',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    // 虚拟路径，不会真实生成
    publicPath: '/xuni/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devServer: {
    // 端口号
    port: 8080,
    // 静态资源文件夹
    static: {
        directory: 'www'
    },
  },
};