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
  '.teamArticle_header_actions .teamArticle_header_action:nth-child(2),' +
  '.likeButtonWithLikers_users'
)
Array.prototype.forEach.call(willAddMontaElements, function(element) {
  // create monta element
  var monta = createMontaElement()
  element.appendChild(monta)
  element.style.visibility = 'visible'
})

// likeButtonWithLikers
var likeButtons = document.querySelectorAll('.likeButtonWithLikers')
Array.prototype.forEach.call(likeButtons, function(element) {
  var isPostOwner = document.querySelectorAll('.currentUser').length > 0 // @todo
  if (!isPostOwner) {
    element.style.visibility = 'visible'
  }
})
