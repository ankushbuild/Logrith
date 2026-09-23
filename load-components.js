function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// AdSense
(function() {
  var s = document.createElement('script');
  s.async = true;
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2892592901355098";
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
})();

// no language detect, direct load
loadComponent("navbar", "/components/navbar.html");
loadComponent("footer", "/components/footer.html");
