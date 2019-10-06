$(document).ready(function () {

  $('.item__description__sizeBox--item').on('click ', function(event) {
    $('.item__description__size--value').text(event.currentTarget.innerText);
  });

  $('.item__description--button').on('click ', function() {
    const size = $('.item__description__sizeBox input:checked').val();

    if (size===undefined) {
      alert('Please choose size');
      return;
    }

    const title = $('.item__description--header').text();
    const price = $('.item__description--price span').text();
    const newItem = $(".header__cart__cartContent__item--hidden").clone();

    newItem.appendTo(".header__cart__cartContent");

    newItem.find('.header__cart__cartContent__item__parameters--size span').text(size);
    newItem.find('.header__cart__cartContent__item__parameters--header').text(title);
    newItem.find('.header__cart__cartContent__item__parameters--price').text(price);

    newItem.removeClass('header__cart__cartContent__item--hidden');
  });

});

