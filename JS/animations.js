function display(){

	var content_login = document.getElementById('content_login');
	
	if( (content_login.value == 'YOUR ID') || (content_login.value == 'UNKNOWN ID') || (content_login.value == '') ){
	
		content_login.value = 'UNKNOWN ID';
		content_login.focus();
		content_login.className = 'outline';	
		setTimeout(function(){content_login.className = '';},1500);

	}else{
	
		content_login.blur();
		document.getElementById('nav').className = 'move';
		document.getElementById('authentification').className = 'visibility';
		document.getElementById('valid_login').className = 'validation';
	
	}

}

function key_test(){

	if (event.keyCode == 13){

		display();
		
	}
}

function selection(){

	document.getElementById('content_login').select();

}