$(document).ready(function(){

	$("#mail").keyup(function(){
		var ch = $("#mail").val().search("@");
		var l = $("#mail").val().length;
		
		if(l==0){
			$("#vm").text(" ");
		}
		else if(ch<0){
			$("#vm").text("Invalid Email").css("color","red");
		}
		else{
			$("#vm").text(" ");	
		}
	});



	$("#fnam,#lnam").keyup(function(){

		var fn = $("#fnam").val();
		var fnl = $("#fnam").val().length;
		var ln = $("#lnam").val();
		var lnl = $("#lnam").val().length;

		if(fnl>0 && lnl>0)
		{
			$("#fullnam").val(fn+" "+ln);
		}
		else{
			$("#fullnam").val("");
		}

	});


	$("#pass,#cpass").keyup(function(){
		var pa=$("#pass").val();
		var cpa=$("#cpass").val();
		var cpav=$("#cpass").val().length;

		if(cpav==0){
			$("#pmsg").text("");
		}
		else if(pa==cpa){
			$("#pmsg").text("Password Match").css("color","green");
		}
		else if(pa!=cpa){
			$("#pmsg").text("Password Not Match").css("color","red");
		}
	});

	
	$(".omale").draggable({
		stack: ".omale",
		revert : "valid"
	});



	$(".chuu").droppable({
		accept :"#m",
		drop: function(){
			alert("SUCCESS !");
		}
	});

	$( ".all" ).sortable();
    $( ".all" ).disableSelection();

});