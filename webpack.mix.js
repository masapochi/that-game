const mix = require('laravel-mix');

const sassOptions = {
  sassOptions: {
    outputStyle: "compressed",
  }
};
mix
  .sass('src/scss/home.scss', 'dist/css/home.min.css', sassOptions)
  .sass('src/scss/history.scss', 'dist/css/history.min.css', sassOptions)
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')({
        grid: true,
      })
    ],

  })
  .js('src/js/app.js', 'dist/js')
  // .sourceMaps()
  .sourceMaps(true, 'source-map')

  .browserSync({ // ここから
    proxy: {
      target: "http://127.0.0.1:8000" // 最後に/は不要
    },
    files: [ // チェックするファイルは下記で十分ではないかな。
      'index.html',
      'src/**/*',
      'dist/**/*',
    ],
    open: false, //BrowserSync起動時にブラウザを開かない
    reloadOnRestart: true //BrowserSync起動時にブラウザにリロード命令おくる
  })
