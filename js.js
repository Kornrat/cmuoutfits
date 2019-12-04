
$('.scrollTo').click(function(){
	var offset = 60;
	$('html, body').animate({
    scrollTop: ($('#target-element').offset().top - offset)
},500);
});


function changeAnswerCFA(){


	$("#rightCFA").removeAttr('id');
	$('#rightCFA').addClass('animated fadeIn');


		}


function changewrongAnswerCFA() {

	$("#wrongCFA").removeAttr('id');
	$('#wrongCFA').addClass('animated fadeIn');
		}


function changeAnswerCIT() {

	$("#rightCIT").removeAttr('id');
	$('#rightCIT').addClass('animated fadeIn');

		}


function changewrongAnswerCIT() {

	$("#wrongCIT").removeAttr('id');
	$('#wrongCIT').addClass('animated fadeIn');

		}

function changeAnswerDIET() {

	$("#rightDIET").removeAttr('id');
	$('#rightDIET').addClass('animated fadeIn');

		}


function changewrongAnswerDIET() {

	$("#wrongDIET").removeAttr('id');
	$('#wrongDIET').addClass('animated fadeIn');

		}


