$(document).ready(function() {
	var q = 0;
	var hits = 0;
	var misses = 0;

	var questionArray = [
	{	'question':'What was the name of Frank E. Stranges\' personal alien?',
		'answer0': 'Jesus Sananda',
		'answer1': 'Aura Rhanes',
		'answer2': 'Ashtar',
		'answer3': 'Valient Thor',
		'correct': 'Valient Thor'
	},
	{	'question':'Who became romantically involved with Elizabeth Klarer?',
		'answer0': 'Akon from Meton',
		'answer1': 'Monka',
		'answer2': 'Ashtar',
		'answer3': 'Valient Thor',
		'correct': 'Akon from Meton'
	},
	{ 	'question':'Who is not a member of The Ashtar Command?',
		'answer0': 'Eve',
		'answer1': 'Monka',
		'answer2': 'Akon',
		'answer3': 'Jesus',
		'correct': 'Akon'
	},
	{	'question' : 'What was Sharon, from Meton, out gathering?',
		'answer0': 'POGs',
		'answer1': 'Roots',
		'answer2': 'Pok&#233;mon',
		'answer3': 'Baseball Cards'

	}
	];

	setupGame();

	function setupGame() {

		$('span').click(function() {
			$('span').empty();
			setTimeout(endGame, 1000 * 120);
			nextQ();
			runTime();
			$('#timerTitle').html("<h2>Time Remaining</h2>");
		});
	}

	function nextQ() {
		if (questionArray.length == 0) {
			endGame ();
		} else {

		q = Math.floor(Math.random() * (questionArray.length + 1));

		$('#question').html('<h3>'+questionArray[q].question+'</h3>');
		$('#a0').html('<input type="checkbox">'+questionArray[q].answer0+'');
		$('#a1').html('<input type="checkbox">'+questionArray[q].answer1+'');
		$('#a2').html('<input type="checkbox">'+questionArray[q].answer2+'');
		$('#a3').html('<input type="checkbox">'+questionArray[q].answer3+'');
	};
	};

	function runTime() {
		counter = setInterval(decrement, 1000);
	}

	function decrement() {
		number --;

		currentTime = timeConverter(number);
		$('#timer').html(currentTime);

		if (number === 0) {
			endGame();
		}
	}

	function gamePlay() {

		var correct = question[q].correct; 

		if (selection == correct) {
			hits++;
			questionArray[q].splice(q, 1);
			if (questionArray.length == 0) {
				endGame();
			};
		} else {
			misses++;
			questionArray[q].splice(q, 1);
			if (questionArray.length == 0) {
				endGame();
			};
		}

	}

	function endGame() {

	}

	function timeConverter(t){

        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    };


});	