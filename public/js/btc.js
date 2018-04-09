document.currentScript.src ='';

(function() {
  function asyncLoad() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    var theUrl = 'https://buy.coinbase.com/static/widget.js';
    s.src = theUrl+ (theUrl.indexOf("?") >= 0 ? '&' : '?') + 'ref=' + encodeURIComponent(window.location.href);
    var embedder = document.getElementById('coinbase_widget_loader');
    embedder.parentNode.insertBefore(s, embedder);
  }
  if (window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();