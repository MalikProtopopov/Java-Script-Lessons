var assortmentData = [
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  },
  {
    inStock: true,
    isHit: true
  },
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  }
];

var updateCards = function (cards) {
  var items = document.querySelectorAll('.goods .good');
  for (var i = 0; i< items.length; i++) {
    var item = items[i];
    var card = cards[i];
    var cardClass = 'good--available';
    var isHit = 'good--hit';
    if (!card.inStock) {
      var cardClass = 'good--unavailable';
      } 
    item.classList.add(cardClass);
      
    if (card.isHit) {
      item.classList.add(isHit);
    }  
  }
}
updateCards(assortmentData);
