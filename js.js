
$('.scrollTo').click(function(){
	var offset = 60;
	$('html, body').animate({
    scrollTop: ($('#target-element').offset().top - offset)
},500);
});


function changeAnswerCFA(){


	$("#rightCFA").removeAttr('id');
	$('#rightCFA').fadeIn();


		}


function changewrongAnswerCFA() {

	$("#wrongCFA").removeAttr('id');
	$('#wrongCFA').fadeIn();;
		}


function changeAnswerCIT() {

	$("#rightCIT").removeAttr('id');
	$('#rightCIT').fadeIn();;

		}


function changewrongAnswerCIT() {

	$("#wrongCIT").removeAttr('id');
	$('#wrongCIT').fadeIn();;

		}

function changeAnswerDIET() {

	$("#rightDIET").removeAttr('id');
	$('#rightDIET').fadeIn();

		}


function changewrongAnswerDIET() {

	$("#wrongDIET").removeAttr('id');
	$('#wrongDIET').fadeIn();;

		}


