$(function() {
  var mixer = mixitup(".content__inner-box");

  $(".stars-item").rateYo({
    rating: 4.6,
    readOnly: true,
    spacing: "3px",
    starWidth: "15px"
  });

  $(".product-slider").slick({
    arrows: true,
    prevArrow: $(".product__top-arrows-left"),
    nextArrow: $(".product__top-arrows-right")
  });
});
