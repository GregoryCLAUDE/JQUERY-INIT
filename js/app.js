

$("#removeDiv").click(function(){
	$("div.remove").remove();
});




$("#setText").on("change",function(){

$("div.needText").html($("#setText").val())
	
});


$("#setColor").click(function(){
	$("#changeColor").css("background-color","red");
});