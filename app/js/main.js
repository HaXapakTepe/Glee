$ (function() {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);

      },

  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });
  
  var mixer = mixitup('.product__items');
  var mixer = mixitup('.design__items');
});