(function ( $ ) {
  $.fn.co2offset = function() {
    const originalURL = encodeURIComponent(window.location.hostname);
    let html = `<a style="text-decoration:none" target"_blank" href="https://co2offset.io/jquery.html?host=${
      originalURL
    }">`
    html += `<img src="https://api.corrently.io/v2.0/ghgmanage/statusimg?host=${
      originalURL
    }" style="margin-right:5px"/>`
    html += "CO<sub>2</sub>offset"
    html += "</a>"
    this.html(html);
  };
}( jQuery ));
