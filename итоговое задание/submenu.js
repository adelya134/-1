$('.menu__list li a').click(function(e){   
    e.preventDefault();                
    var item = $(this).closest('li');  
    var sub = item.find('.sub');       
    sub.slideToggle();                 
   });