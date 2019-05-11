$(".container div").click(function(event) {
	$("body").removeClass()
	var color = ($(this).attr('class'))
	localStorage.setItem('color', color)
	$("body").addClass(color)
});
if (localStorage.getItem('color')){
	$("body").addClass(localStorage.getItem('color'))
}
else{
	$("body").addClass("color ")
}
$('button').click(function(event) {
	$(".container").toggle('slow')
});