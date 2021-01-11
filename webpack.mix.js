const mix = require('laravel-mix');

const sassOptions = {
  sassOptions: {
    // outputStyle: "compressed",
  }
};

mix.setPublicPath('public');
// mix.autoload({
//   'vue': ['Vue', 'window.vue']
// })
mix.webpackConfig({
  resolve: {
    alias: { 'vue$': 'vue/dist/vue.esm.js' }
  }
})
mix
  .copy('src/js/common/modernizr.min.js', 'public/js/common/modernizr.min.js')
  .copyDirectory('src/images', 'public/images')
  .sass('src/scss/pages/home.scss', 'public/css/home.min.css', sassOptions)
  .sass('src/scss/pages/fight.scss', 'public/css/fight.min.css', sassOptions)
  .sass('src/scss/pages/history.scss', 'public/css/history.min.css', sassOptions)
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')({
        grid: true,
      })
    ],

  })
  .js('src/js/common/toggle_menu.js', 'public/js/common/toggle_menu.js')
  .js('src/js/fight/app.js', 'public/js/fight/app.js')
  .vue()
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
    'src/**/*',
    'public/**/*',
  ],
  open: false, //BrowserSync起動時にブラウザを開かない
  reloadOnRestart: true //BrowserSync起動時にブラウザにリロード命令おくる
})
