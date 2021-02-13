const mix = require('laravel-mix');

const sassOptions = {
  sassOptions: {
    // outputStyle: "compressed",
  }
};

let dir = '';
if (mix.inProduction()) {
  dir = 'dist';
  mix.setPublicPath('dist');
} else {
  dir = 'public';
  mix.setPublicPath('public');
}

// mix.autoload({
//   'vue': ['Vue', 'window.vue']
// })
mix.webpackConfig({
  resolve: {
    alias: { 'vue$': 'vue/dist/vue.esm.js' }
  }
})
mix
  .copy(`src/js/common/modernizr.min.js`, `${dir}/js/common/modernizr.min.js`)
  .copyDirectory(`src/images`, `${dir}/images`)
  .sass(`src/scss/pages/home.scss`, `${dir}/css/home.min.css`, sassOptions)
  .sass(`src/scss/pages/fight.scss`, `${dir}/css/fight.min.css`, sassOptions)
  .sass(`src/scss/pages/history.scss`, `${dir}/css/history.min.css`, sassOptions)
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')({
        grid: true,
      })
    ],

  })
  .js(`src/js/common/toggle_menu.js`, `${dir}/js/common/toggle_menu.js`)
  .js(`src/js/fight/app.js`, `${dir}/js/fight/app.js`)
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
