<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- <meta name="robots" content="nofollow, noindex"> -->

<?php require_once __DIR__ . '/tag_manager.php'; ?>

<!-- Prevents recognition as a phone number when numbers are lined up -->
<meta name="format-detection" content="telephone=no">

<!-- Favicon -->
<link rel="icon" href="/that-game/favicon.ico">

<!-- Page title and description -->
<title>あの親指ゲーム</title>
<meta name="description" content="みんな知っているけれど、名前はだれも知らない親指ゲームです。">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@__masapochi__">
<meta name="twitter:creator" content="@__masapochi__">
<meta name="twitter:url" content="https://masapochi.me/that-game/">
<meta name="twitter:title" content="あの親指ゲーム">
<meta name="twitter:image" content="https://masapochi.me/that-game/images/common/ogp.png">
<meta name="twitter:description" content="みんな知っているけれど、名前はだれも知らない親指ゲームです。">
<!-- Facebook OGP -->
<meta property="og:url" content="https://masapochi.me/that-game/">
<meta property="og:type" content="website">
<meta property="og:title" content="あの親指ゲーム">
<meta property="og:image" content="https://masapochi.me/that-game/images/common/ogp.png">
<meta property="og:description" content="みんな知っているけれど、名前はだれも知らない親指ゲームです。">
<meta property="og:site_name" content="masapochi.me">
<meta property="og:locale" content="ja_JP">

<!-- iOs -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="あの親指ゲーム">
<link rel="apple-touch-icon" sizes="256x256" href="/that-game/touch-icon.png">
<!-- Android -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#FBFFE3">
<link rel="icon" sizes="256x256" href="/that-game/touch-icon.png">
<link rel="manifest" href="/that-game/manifest.json">

<!-- Service Worker for PWA -->
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function() {
      console.log("Service Worker is registered!!");
    });
  }
</script>
