// main function
$(document).ready(function(){
	var turns = 0; // initially turns played = 0

	// function to reset the game when done
	reset_fxn = function(){
		$('#board li').text(''); // clear all boxes
		$('#board li').removeClass('disable'); // enable all boxes
		$('#board li').removeClass('o'); // remove classes whether they are x or o
		$('#board li').removeClass('x');
		turns = 0; // reset turns to 0
	}

	// variables for all boxes
	var box1 = $('#box1');
	var box2 = $('#box2');
	var box3 = $('#box3');
	var box4 = $('#box4');
	var box5 = $('#box5');
	var box6 = $('#box6');
	var box7 = $('#box7');
	var box8 = $('#box8');
	var box9 = $('#box9');


	// when a box is clicked
	$('#board li').on('click', function(){

		// if even turn and box is enabled
		if( turns%2 == 0 && !($(this).hasClass('disable'))){
			turns++; // increment no of turns
			$(this).text('o'); // display 'O' in box
			$(this).addClass('disable o'); // disable box

			// check if 'O' wins
			if( // horizontal 1
				box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o') ||
				// horizontal 2
				box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o') ||
				// horizontal 3
				box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o') ||
				// vertical 1
				box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o') ||
				// vertical 2
				box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o') ||
				// vertical 3
				box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o') ||
				// primary diagonal
				box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o') ||
				// secondary diagonal
				box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')
			){
				alert('O wins'); // Announce winnner is 'O'
				reset_fxn(); // and reset the game
			}
		}
		// if odd turn and box is enabled
		else if (turns%2 == 1 && !($(this).hasClass('disable'))){
			turns++; // increment no of turns
			$(this).text('x'); // display 'X'
			$(this).addClass('disable x'); // disable box

			// check if 'X' wins
			if(	// horizontal 1
				box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x') ||
				// horizontal 2
				box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x') ||
				// horizontal 3
				box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x') ||
				// vertical 1
				box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x') ||
				// vertical 2
				box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x') ||
				// vertical 3
				box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x') ||
				// primary diagonal
				box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x') ||
				// secondary diagonal
				box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')
			){
				alert('X wins'); // Announce winner is 'X'
				reset_fxn(); // and reset the game
			}
		}
		// if a player clicks on already filled box
		else{
			alert("Hey cheater, Try another box!"); // ask to click another box
		}

		// if all boxes filled but no one wins
		if(turns == 9){
			alert('Tie Game'); // Announce tie
			reset_fxn(); // and reset the game
		}

	});


	// reset button
	$('#reset').on('click', reset_fxn);
});