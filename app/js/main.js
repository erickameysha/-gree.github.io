
  
  $('.product-slide__thumb').slick({
     asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
  });
  $('.product-slide__big').slick({
     asNavFor: '.product-slide__thumb',
     draggable: false,
     arrows: false,
     fade: true
  });

$(function () {
  $('.product-one__num').styler()
  
  $(".product-one__star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true
  })

  let containerEl1 = document.querySelector('.design');
  let containerEl2 = document.querySelector('.products');
  let config = {
    controls: {
      scope: 'local',
    },
  };
  (() => mixitup(containerEl1, config))();
  (() => mixitup(containerEl2, config))();
  

});
