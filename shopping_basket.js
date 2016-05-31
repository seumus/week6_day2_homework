var _ = require('lodash');

var basket = {
  items: [],
  card: false,
  add: function(item) {
    this.items.push(item);
  },
  remove: function(item) {
    this.items.splice(item,1);
  },
  addCard: function() {
    this.card = true;
  },
  total: function(){
    x = 0
    for (var i in this.items){
      x += this.items[i].price
    }
    return x},
  discount: function() {
    var total = function(){
      x = 0
      for (var i in this.items){
        x += this.items[i].price
      }
      return x
    }.bind(this)
    if (total() > 20) {
      y = total();
      z = (y/100) * 90;
      if (this.card === true) {
        w = (y/100) * 85;
        return w.toFixed(2);
      }
      else {
        return z;
      }
    }
    else {
      console.log("Not enough in basket");
    }
  },
  bOGOF: function() {
    x = this.items.pop()
    // console.log(x)
    if (_.includes(this.items,x)) {
      this.total - x.price
    }
  }

}

module.exports = basket;
