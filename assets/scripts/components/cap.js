const capPictures = document.querySelectorAll('[data-element="cap__picture"]')

if (capPictures.length) capPicturesInit()

function capPicturesInit () {
  setTimeout(showPictures, 0)

  function showPictures () {
    for (let i = 0; i < capPictures.length; i++) {
      capPictures[i].classList.add('show')
    }
  }
}
