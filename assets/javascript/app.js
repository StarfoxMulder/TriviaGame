$(document).ready(function() {
	var q = 0;
	var hits = 0;
	var misses = 0;
	var number = 120;

	var questionArray = [
	{	'question':'What was the name of Frank E. Stranges\' personal alien?',
		'answer0': 'Jesus Sananda',
		'answer1': 'Aura Rhanes',
		'answer2': 'Ashtar',
		'answer3': 'Valient Thor',
		'correct': 'a3'
	},
	{	'question':'Who became romantically involved with Elizabeth Klarer?',
		'answer0': 'Akon from Meton',
		'answer1': 'Monka',
		'answer2': 'Ashtar',
		'answer3': 'Valient Thor',
		'correct': 'a0'
	},
	{ 	'question':'Who is not a member of The Ashtar Command?',
		'answer0': 'Eve',
		'answer1': 'Monka',
		'answer2': 'Akon',
		'answer3': 'Jesus',
		'correct': 'a2'
	},
	{	'question' : 'What planet was Valient Thor from?',
		'answer0': 'Meton',
		'answer1': 'Venus',
		'answer2': 'Clarion',
		'answer3': 'Mars',
		'correct': 'a1'
	},
	{	'question' : 'How many spheres are on the bottom of the ships seen by George Adamski?',
		'answer0': '0',
		'answer1': '1',
		'answer2': '3',
		'answer3': '15',
		'correct': 'a2'
	},
	{	'question' : 'On Uumo, what do ducks turn into?',
		'answer0': 'People',
		'answer1': 'Future Souls',
		'answer2': 'Butterflies',
		'answer3': 'Other Ducks',
		'correct': 'a2'
	},
	{	'question' : 'The Korendians first made contact in which state of the USA?',
		'answer0': 'Vermont',
		'answer1': 'North Carolina',
		'answer2': 'Michigan',
		'answer3': 'California',
		'correct': 'a3'
	},
	{	'question' : 'What was the name of the group communicating with the Uumites?',
		'answer0': 'Happy Whale Club',
		'answer1': 'Umm...',
		'answer2': 'Sprinkle Garden',
		'answer3': 'Tiny Town',
		'correct': 'a0'
	},
	{	'question' : 'How many buttons were on Valient Thor\'s toilet?',
		'answer0': '3',
		'answer1': '2',
		'answer2': '1',
		'answer3': '0',
		'correct': 'a0'
	}
	];

	setupGame();

	$('.checkbox').click(function() {
		guess = $(this).children().attr('id');
		console.log(".checkbox click assign value to guess: ", guess);
		gamePlay();
		nextQ();
	});

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

			q = Math.floor(Math.random() * (questionArray.length)); // I had *questionArray.length + 1), but I think that skipped the 0 index

			$('#question').html('<h3>'+questionArray[q].question+'</h3>');
			$('#a0').html(questionArray[q].answer0);
			$('#a1').html(questionArray[q].answer1);
			$('#a2').html(questionArray[q].answer2);
			$('#a3').html(questionArray[q].answer3);
		};
	};

	function runTime() {
		$('#timer').html("2:00");
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

		var correct = questionArray[q].correct;
		console.log("Correct answer for question %d is %s ", q, correct);

		if (guess == correct) {
			console.log("first conditional 'guess': ", guess);
			hits++;
			console.log("first conditional 'hits': ", hits);
			questionArray.splice(q, 1);
			console.log("first conditional 'questionArray.length': ", questionArray.length);
			if (questionArray.length == 0) {
				endGame();
			};
		} else {
			console.log("second conditional 'guess': ", guess);
			misses++;
			console.log("second conditional 'misses': ", misses);
			questionArray.splice(q, 1);
			if (questionArray.length == 0) {
				endGame();
			};
		}

	}

	function endGame() {
		$('span').empty();
		$('span').attr('height', '100%');
		$('span').attr('width', '100%');
		$('.endGameGone').remove();

		if (number > 0) {
			$('span').html("<h2 class='result'>You have answered all of the questions.  Here are your results!</h2>");
			$('span').append("<h2 class='result'>Number Correct: "+hits+"</h2>");
			$('span').append("<h2 class='result'>Number Incorrect: "+misses+"</h2>");
		} else {
			$('span').html("<h2 class='result'>You have run out of time.  Here are your results!</h2>");
			$('span').append("<h2 class='result'>Number Correct: "+hits+"</h2>");
			$('span').append("<h2 class='result'>Number Incorrect: "+misses+"</h2>");
		}
	};

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
