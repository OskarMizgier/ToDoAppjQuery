//Toggle the class completed when li is clicked
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed')
})

//Delete the to-do
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(700, function () {
        $(this).remove()
    });
    event.stopPropagation();
})

//Add new todo on keypress enter
$("input[type='text']").keypress(function (event) {
   if(event.which === 13) {
       //Grab the ToDo
  var newTodo = $("input[type='text']").val()
        //Create new element
        $('ul').append('<li><span><i class="far fa-trash-alt"></i> </span>'+ newTodo + '</li>')
        // Reset input
        $("input[type='text']").val('')
       
   } 
})

// When plus clicked focus on the input
$('#focus').on('click', function () {
    if($('#focus').css('color') === 'rgb(0, 0, 0)') {
        $('#focus').css('color', 'white')
    } else {
        $(this).css('color', 'black')
    $("input[type='text']").focus();
    }
})


// Check off the specific Todo by clicking
//$('li').click(function () {
    //Check if Li is gray and turn it back to default
    // if($(this).css('color') === 'rgb(128, 128, 128)') {
        // $(this).css({
            // color: 'black',
            // textDecoration: 'none'
        // })
    //} 
    //Change the style to gray and text dec
   // else {
      //  $(this).css({
       //     color: 'grey',
        //textDecoration: 'line-through'
      //  }) 
  //  }
    //Check the color in the console 
    //console.log($(this).css('color'))

//});