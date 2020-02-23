$(function() {
  $(".product__item-info-data-stars").rateYo({
    rating: 4.6,
    readOnly: true,
    spacing: "3px",
    starWidth: "15px"
  });
  $(".product-slider").slick({
    prevArrow: $(".product__top-arrows-left"),
    nextArrow: $(".product__top-arrows-right"),
    arrows: true
  });
});
