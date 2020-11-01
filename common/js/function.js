
((win, doc) => {
  'use strict';

  // ローディングアニメーション
  win.onload = function() {
    const spinner = doc.getElementById('loading');
    spinner.classList.add('loaded');
  }

// ハンバーガーメニュー
  const hamburgerHook =  doc.querySelector('.js-hamburger-hook');
  console.log(document.body)
  
  hamburgerHook.classList.add('is-active')
})(window, document);
