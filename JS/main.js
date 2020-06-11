//Typewriter Effect
//$(document).ready(function(){
//$("#typewriter").ghosttyper({
 // messages: ['Creating brands through culture'],
 // timeWrite: 100,
 // timeDelete: 50,
 // timePause: 1000,
 // loop: true
//});

//});
$('#toggle').click(function(){
    $(this).toggleClass('on');
    $('#resize').toggleClass('active');
});


$('#resize ul li a').click(function(){
    $(this).toggleClass('on');
    $('#resize').toggleClass('active');
});

$('.close-btn').click(function(){
    $(this).toggleClass('on');
    $('#resize').toggleClass('active');
});


 // nav animation

      TweenMax.from("#brand", 1, {
            delay: 0.4,
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
      })

      TweenMax.staggerFrom("#menu li a", 1, {
            delay: 0.6,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1);

      // nav animation ends



/*==========================
            Wow Animations
===========================*/
        
 $(document).ready(function() {
     new WOW().init();
});




