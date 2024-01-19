burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
// burger = document.querySelector('.burger')

burger.addEventListener('click', ()=>{
    // navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})




let options = {
    startAngle: -1.55,
    size: 122,
    value: 0.85,
    fill: {gradient: ['purple', '#0f0f40']}         /*  '#a445b2', '#fa4299'  */
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".css .bar").circleProgress({
    value: 0.80
  });
  $(".js .bar").circleProgress({
    value: 0.70
  });
  $(".bt .bar").circleProgress({
    value: 0.70
  });
  $(".mu .bar").circleProgress({
    value: 0.70
  });
  

