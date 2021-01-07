const mix = require('laravel-mix');

const sassOptions = {
  sassOptions: {
    // outputStyle: "compressed",
  }
};

mix.setPublicPath('dist');

mix.webpackConfig({
  resolve: {
    alias: { 'vue$': 'vue/dist/vue.esm.js' }
  }
})
mix
  .copy('src/js/common/modernizr.min.js', 'dist/js/common/modernizr.min.js')
  .copyDirectory('src/images', 'dist/images')
  .sass('src/scss/pages/home.scss', 'dist/css/home.min.css', sassOptions)
  .sass('src/scss/pages/fight.scss', 'dist/css/fight.min.css', sassOptions)
  .sass('src/scss/pages/history.scss', 'dist/css/history.min.css', sassOptions)
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')({
        grid: true,
      })
    ],

  })
  .js('src/js/common/toggle_menu.js', 'dist/js/common/toggle_menu.js')
  .js('src/js/fight/app.js', 'dist/js/fight/app.js')
  .autoload({
    "vue": ['Vue', 'window.Vue']
  })
  .sourceMaps({ generateForProduction: false }, 'source-map');

if (mix.inProduction()) {
  mix.version();
}

// Browsersync
mix.browserSync({
  proxy: {
    target: "http://127.0.0.1:8000" // 最後に/は不要
  },
  files: [ // チェックするファイル
    './**.php',
    'partials/**/*.php',
    'src/**/*',
    'dist/**/*',
  ],
  open: false, //BrowserSync起動時にブラウザを開かない
  reloadOnRestart: true //BrowserSync起動時にブラウザにリロード命令おくる
})
