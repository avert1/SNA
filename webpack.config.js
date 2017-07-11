
module.exports = {
  entry: './App/Routes/index.js',
  output:{
      filename: 'bundle.js',
      path: __dirname + '/App/public/js'
  },
  module:{
    loaders:[
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
