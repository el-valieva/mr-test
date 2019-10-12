$(document).ready(function () {
  $('.item__description__sizeBox__item').on('click ', function(event) {
    $('.item__description__size__value').text(event.currentTarget.innerText);
  });

  $('.item__description__button').on('click ', function() {
    const size = $('.item__description__sizeBox input:checked').val();

    if (size===undefined) {
      alert('Please choose size');
      return;
    }

    const title = $('.item__description__header').text();
    const price = $('.item__description__price span').text();
    const newItem = $(".header__cart__cartContent__item--hidden").clone();

    newItem.appendTo(".header__cart__cartContent");

    newItem.find('.header__cart__cartContent__item__parameters__size span').text(size);
    newItem.find('.header__cart__cartContent__item__parameters__header').text(title);
    newItem.find('.header__cart__cartContent__item__parameters__price').text(price);

    newItem.removeClass('header__cart__cartContent__item--hidden');

      $('.header__cart__cartContent').addClass('header__cart__cartContent--notEmpty');
      $('.header__cart__link').addClass('header__cart__link--notEmpty');
  });

  if ($('.header__cart__cartContent__item').not('.header__cart__cartContent__item--hidden').length===0) {
    $('.header__cart__cartContent').addClass('header__cart__cartContent--empty');
    $('.header__cart__link').addClass('header__cart__link--empty');
  }

});

