$(document).ready(function () {

    console.log('I am in a new file now');

    //Ypur JQuery code here 

    // console.log($);
    console.log("We are using JQuery");
    //JQuery sysntax looks like this
    // $('selector').action()

    //Clicks on all the p elements.This is an example of Element selector.
    // $('p').click(); //Click on p
    /* $('p').click(function () {
         console.log('you clicked on p', this);
       $('p').hide();
         $(this).hide();
         $('#id').hide();
         $('.class').hide(); 
     }); */  //do this when we clicked on p

    // doble click(dblclick) Events
    /*  $('p').dblclick(function () {
         console.log('you double clicked on p', this);
     }); */
    //  mouseEnter Event 
    /*  $('p').mouseenter(function () {
         console.log('you Entered :', this);
     }); */

    // Hover Event 
    /*  $('p').hover(function () {
          console.log('you hoverd on :', this);
      },
      function(){
          console.log('Thanks for comming')
      }); */


    // id selector examples
    // $('#second').click();

    // Class selector example
    // $('.odd').click();

    // Others selector 
    // $('*').click(); //click on all the elements
    // $('p.odd').click();  //clicks on all the elements
    // $('p:first').click();

    // Demoing the on method 
    /* $('p').on('click', function(){
        console.log('Thanks for clicking', this);
    }); */

    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log('mouseleave');
            }
        });

    // $('#lorem').hide();
    // $('#lorem').show();
    // $('#lorem').hide(2000);
    /* $('#lorem').hide(2000, function(){
        console.log('hidden');
    }); */

    /*  $('#lorem').show(2000, function(){
          console.log('Shown');
      });  */

    /*  $('#but').click(function(){
          $('#lorem').toggle(2000);
      }); */

    /* $('#but').click(function(){
         $('#lorem').fadeOut(2000);
     }); */

    /*  $('#but').click(function(){
          $('#lorem').fadeIn(2000);
      }); */

    /* $('#but').click(function(){
        $('#lorem').fadeToggle(2000);
    }); */

    /*  $('#but').click(function(){
          $('#lorem').fadeTo(2000);
      }); */

    /*  $('#lorem').slideUp(2000, function(){
         console.log('done');
     }); */

    // $('#lorem').slideDown(2000); 
    // $('#lorem').slideToggle(2000);

    // $('#lorem').animate({opacity:0.3}, 2000);

    /*  $('#lorem').animate(
         {opacity:0.3,
             height: '150px',
             width: '350px'
         }, 2000);  */

    /*  $('#lorem').animate({opacity:0.3}, 5000);
     $('#lorem').animate({opacity:0.9}, 3000);
     $('#lorem').animate({width:'300px'}, 12000); */

    /*   $('#lorem').stop(function(){
           console.log('stopped');
       }) */

    /*   $('#ta').val('This is a book');
      $('#ta').html('This is a book');
      $('#inp').val('This is a book 5000');
      $('#inp').empty();
      $('#lorem').empty(); 
      $('#lorem').remove(); */

    /*  $('#lorem').addClass('myclass');
      $('#lorem').addClass('myclass2');
      $('#lorem').removeClass('myclass2');
      $('#lorem').css('background-color', 'red');
      $('#lorem').css('background-color');  */

    // AJAX using JQuery
  /*  $.get('https://code.jquery.com/jquery-3.6.0.js');

    $.get('https://code.jquery.com/jquery-3.6.0.js', function (data, status) { alert(data); });

    $.get('https://code.jquery.com/jquery-3.6.0.js', function (data, status) { alert(status); });

    $.get('https://code.jquery.com/jquery-3.6.0.js', { name: 'zahid', channel: 'code with zahid' }, function (data, status) { alert(status); });  */








});
