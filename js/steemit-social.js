$(document).ready(function(){
	$('[data-toggle=steemit-follow]').click(_steemit_follow);
});

function _steemit_follow(e){
	e.preventDefault();
	var username = $(this).data('value');
	window.open('https://steemit.com/@' + username, '_blank');
}