/*
Create a page with 10 images, and when an image is clicked, to appear in the center as a modal, with an X icon to close and return to all images.
anyone can take as much points as they can
ideally would be to made the all in the next weeks
*/

function previewImg () {
  const modal = document.getElementById('modal')
  const previewImg = document.getElementById('preview')
  const img = document.getElementById('img')
  const srcAttr = img.getAttribute('src')
  previewImg.setAttribute('src', srcAttr)
  modal.style.display = 'flex'
}
