var $scroller = $('#main ul.stroll');

function init(){
	stroll.bind( $scroller );
}

$.ajax({
    url: 'data/image.json',
    type: 'GET',
    dataType: 'json'
})
.done(function(response) {

    var pictures = response.picture;
    console.log(pictures[1].picture);
        
    for(var i = 0; i<pictures.length; i++){
        var picture = pictures[i].picture;
  
       	var li = $('<li />');
        var img =  $('<img />', { src: picture }).appendTo(li);
        li.appendTo('.stroll');
    }
	init();
});

$('.stroll-cards').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll cards');
	clearActive();
	$(this).parent().addClass('active');
});

$('.stroll-curl').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll curl');
	clearActive();
	$(this).parent().addClass('active');
});

$('.stroll-twirl').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll twirl');
	clearActive();
	$(this).parent().addClass('active');
});

$('.stroll-helix').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll helix');
	clearActive();
	$(this).parent().addClass('active');
});

$('.stroll-fan').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll fan');
	clearActive();
	$(this).parent().addClass('active');
});

$('.stroll-wave').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll wave');
	clearActive();
	$(this).parent().addClass('active');
});

$('.stroll-papercut').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll papercut');
	clearActive();
	$(this).parent().addClass('active');
});

function clearActive(){
	$('.nav li').removeClass();
}