// create monta
function createMontaElement() {
  var monta = document.createElement('div')
  monta.setAttribute('class', 'hide-iine__monta')
  monta.addEventListener('click', function(e) {
    e.stopImmediatePropagation()
    var self = this
    self.classList.add('removing')
    setTimeout(function() { self.parentNode.removeChild(self) }, 350)
  })
  return monta
}

// add monta on some elements
var willAddMontaElements = document.querySelectorAll(
  '.teamSidebarContainer_likesSection_list, .teamSidebarContainer_likesUsers,' +
  '.teamArticle_header_action:nth-child(1) .teamArticle_header_count,' + // stock
  '.reaction_contents'
)
Array.prototype.forEach.call(willAddMontaElements, function(element) {
  // create monta element
  var monta = createMontaElement()
  element.style.position = 'relative'
  element.style.visibility = 'visible'
  element.appendChild(monta)
})
