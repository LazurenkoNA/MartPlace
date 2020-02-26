$(function() {
  var mixer = mixitup(".content__inner-box");

  $(".stars-item").rateYo({
    rating: 4.6,
    readOnly: false,
    spacing: "3px",
    starWidth: "15px",
    normalFill: "#ffc000",
    starSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
      '<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/>' +
      "</svg>"
  });

  $(".product__slider").slick({
    arrows: true,
    prevArrow: $(".product__top-arrows-left"),
    nextArrow: $(".product__top-arrows-right")
  });

  $(".followers__slider").slick({
    rows: "0",
    arrows: true,
    prevArrow: $(".followers__top-arrows-left"),
    nextArrow: $(".followers__top-arrows-right"),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  // $(".info__search-select").styler({});
});
