
$(document).ready (function () {
    if ($(window).width() < 768) {
        $("#main-links").appendTo("header .navbar-header");
    }
    $('section.write-reviews .btn').click(function () {
    var review = $('section.write-reviews input').val(); 
    if (review != "") {
       $('<div class="review">' + review + '</div>').appendTo('section.reviews');
        $('section.write-reviews input').val("") 
    }     
  });
});
$('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    });

  