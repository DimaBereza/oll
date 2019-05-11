// localStorage.setItem('name','Вася Пупкин')
if (localStorage.getItem('value')){
	$("h1").text(localStorage.getItem('value'))
}
else{
	$("h1").text("localStorage -" )
}


$("#go").click(function(event) {
var value = $("#input").val()
localStorage.setItem('value', value)
});