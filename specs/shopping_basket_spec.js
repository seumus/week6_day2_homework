var basket = require('../shopping_basket');
var shop = require('../shop');
var assert = require('chai').assert;


describe('Shopping Basket', function(){

  it('should be able to add item', function(){
    basket.add(shop[1])
    assert.equal(1, basket.items.length);
  });

  it('should be able to remove item', function(){
    basket.remove(shop[1])
    assert.equal(0, basket.items.length);
  });

  it('should be able to discount item', function(){
    basket.add(shop[3])
    assert.equal(18.9, basket.discount());
  });

  it('should be able to discount item further', function(){
    // basket.add(shop[3])
    basket.addCard()
    assert.equal(17.85, basket.discount());
  });

  it('should be able to buy one get one free', function(){
    basket.add(shop[1])
    basket.add(shop[1])
    basket.bOGOF()
    assert.equal(23, basket.total());
  });

});
