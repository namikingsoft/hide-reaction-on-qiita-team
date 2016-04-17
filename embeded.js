// create monta element
var monta = document.createElement('div')
monta.setAttribute('class', 'hide-iine__monta')
monta.addEventListener('click', function(e) {
  e.stopImmediatePropagation()
  var self = this
  self.classList.add('removing')
  setTimeout(function() { self.parentNode.removeChild(self) }, 350)
})

// add monta on like list
var likelists = document.querySelectorAll(
  '.teamSidebarContainer_likesSection_list'
)
Array.prototype.forEach.call(likelists, function(element) {
  element.appendChild(monta)
  element.style.visibility = 'visible'
})

// add monta on article like
var articleLikes = document.querySelectorAll(
  '.teamArticle_header_actions .teamArticle_header_action:nth-child(2)'
)
Array.prototype.forEach.call(articleLikes, function(element) {
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

// subtract iine on notifications
var notifications = document.querySelectorAll('.globalNotifications')
Array.prototype.forEach.call(notifications, function(element) {
  element.style.visibility = 'visible'
})
