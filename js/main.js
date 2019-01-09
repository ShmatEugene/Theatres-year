const defaultBg = 'url(img/home-default-bg.jpg)';

function changeBg(attribute, defaultBgSelector, imgIdInUrl, startOfTheUrl) {
  console.log(attribute);
  let imgUrl = startOfTheUrl + attribute.attr('id').slice(imgIdInUrl) + '.jpg)';
  console.log(imgUrl);
  $(defaultBgSelector).addClass('home-new-bg');
  $('.home-new-bg').css('background-image', imgUrl);
}

$('.home-theatre-block').hover(function() {
  changeBg($(this), '.home-default-bg', -1, 'url(img/h');
}, function() {
  $('.home-new-bg').css('background-image', defaultBg);
})


$('.events-slider-controller').hover(function() {
  var urlStart = 'url(img/' + $(this).attr('id').slice(0, 2) + '/';
  changeBg($(this), '.event-slide-bg', -1, urlStart);
  //$('.events-target1-date').addClass('event-date-active');
  //let dateSelector = '.events-target' + $(this).attr('id').slice(-1) + 'date';
  //$(dateSelector).addClass('event-date-active');
  $('.event-slide-date-text').removeClass('event-date-active')
  let dateId = $(this).attr('id').slice(-1);
  if( dateId == 1) {
    $('.events-target1-date').addClass('event-date-active');
  } else if(dateId == 2) {
    $('.events-target2-date').addClass('event-date-active');
  } else if(dateId == 3) {
    $('.events-target3-date').addClass('event-date-active');
  }  else if(dateId == 4) {
    $('.events-target4-date').addClass('event-date-active');
  }
  console.log('.events-target' + $(this).attr('id').slice(-1) + '-date');
}, function() {

})




//slider

$(document).ready(function(){
  $('.actor-img-slider').slick({
    prevArrow: $('.sh-prev'),
      nextArrow: $('.sh-next'),
  });
});
