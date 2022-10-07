var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg'
];


var previews = document.querySelectorAll('.gallery__picture-preview');
var fullPhoto = document.querySelector('.full-picture');

var addPreviewClickHandler = function(preview, photo) {
  preview.addEventListener('click', function () {
    fullPhoto.src = photo;
    });
}
for (var i = 0; i < previews.length; i++) {
  addPreviewClickHandler(previews[i], pictures[i]);
}

