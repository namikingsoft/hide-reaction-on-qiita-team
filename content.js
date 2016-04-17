window.onload = function() {
  var script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', chrome.extension.getURL('/embeded.js'))
  document.getElementsByTagName('body')[0].appendChild(script)
}
