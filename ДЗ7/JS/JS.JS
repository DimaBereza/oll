var result=0;

$("#plus").click(function(event){
	if (result > 9) {
        result = -1;
    }
    $("#result").text(result = result+1)
});
$("#minus").click(function(event){
	 if (result < 1) {
        result = 11;
    }
    $("#result").text( result = result-1)
    
});
$("#result").click(function(event){
    $("#result").text(result = 0)
});
