
//	Team object constructor


//	Team object creations
	var austria = new team("Austria", 3, 0);
	var belgium = new team("Belgium", 1, 1);
	var bosnia = new team("Bosnia & Herz.", 2, 2);
	var bulgaria = new team("Bulgaria", 4, 3);
	var croatia = new team("Croatia", 2, 4);
	var czech = new team("Czech Republic", 3, 5);
	var denmark = new team("Denmark", 2, 6);
	var england = new team("England", 2, 7);
	var finland = new team("Finland", 4, 8);
	var france = new team("France", 1, 9);
	var germany = new team("Germany", 1, 10);
	var greece = new team("Greece", 2, 11);
	var hungary = new team("Hungary", 3, 12);
	var israel = new team("Israel", 4, 13);
	var italy = new team("Italy", 1, 14);
	var montenegro = new team("Montenegro", 4, 15);
	var netherlands = new team("Netherlands", 1, 16);
	var northernIreland = new team("N.Ireland", 4, 17);
	var norway = new team("Norway", 4, 18);
	var poland = new team("Poland", 4, 19);
	var portugal = new team("Portugal", 2, 20);
	var ireland = new team("Ireland", 4, 21);
	var romania = new team("Romania", 2, 22);
	var russia = new team("Russia", 2, 23);
	var scotland = new team("Scotland", 3, 24);
	var serbia = new team("Serbia", 3, 25);
	var slovakia = new team("Slovakia", 3, 26);
	var slovenia = new team("Slovenia", 3, 27);
	var spain = new team("Spain", 1, 28);
	var sweden = new team("Sweden", 3, 29);
	var switzerland = new team("Switzerland", 2, 30);
	var turkey = new team("Turkey", 3, 31);
	var ukraine = new team("Ukraine", 2, 32);
	var wales = new team("Wales", 4, 33);

	element = 0;
	var elementCounter = 0;
	var screenWidth = true;

    //display seeds vars
    var s1;
    var s2;
    var s3;
    var s4;



    var flagArray = new generate_flags();
    var buttons = new buttons();
    var utils = new utils();
    var displayDraw = new displayDraw();

    


jQuery(function ($) {
	 
//	Function to pick random teams from each seed group & input into table
	$(document).ready(function() {
	
		drawfull.draw();

		//pick team button
		$("#teamPicked").hide();
		$("select").hide();


		//select team from dynamically created select list
		$("#pickTeam").click(function() {
				$("#pickTeam").hide();
				$("select").show();
				var options = '<option value="blank">Pick team</option>';
				for (var i = 0; i < data.allTeams.length; i++) {
					options += '<option value=' + data.allTeams[i].number + ' data-image="images/euroFlags/"' + [i] + '>' + data.allTeams[i].name + '</option>'
				};

				$('select').html(options);
		});

		$('select').change(function() { //take selected option
			pickedTeams = drawnTeams; //had to assign to a new array. Causing issues (##need to find out why##)
			var optionSelected = $(this).find("option:selected");
			var valueSelected = optionSelected.val();
			var parsedValue = parseInt(valueSelected);
			var textSelected = optionSelected.text();
			checkSelect = valueSelected;
			//if team not in primary draw decide where to put team selected depending on their seed/seedgroup
			tablePos = 0;
			if (data.allTeams[parsedValue].seedGroup == 1) {
				var x = utils.randNumber(10);
				if (x <= 7) {
					tablePos = utils.randTablePos(0, 3);
				} else if (x >= 8 && x <= 9) {
					tablePos = utils.randTablePos(4, 7);
				} else if (x == 10) {
					tablePos = utils.randTablePos(8, 11);
				} else {
					return false;
				}
			}

			if (data.allTeams[parsedValue].seedGroup == 2) {
				var x = utils.randNumber(10);
				if (x <= 2) {
					tablePos = utils.randTablePos(0, 3);
				} else if (x >= 3 && x <= 8) {
					tablePos = utils.randTablePos(4, 7);
				} else if (x >= 8 && x <= 10) {
					tablePos = utils.randTablePos(8, 11);
				} else {
					return false;
				}
			}


			if (data.allTeams[parsedValue].seedGroup == 3) {
				var x = utils.randNumber(10);
				if (x <= 1) {
					tablePos = utils.randTablePos(4, 7);
				} else if (x >= 2 && x <= 8) {
					tablePos = utils.randTablePos(8, 11);
				} else if (x >= 9 && x <= 10) {
					tablePos = utils.randTablePos(12, 15);
				} else {
					return false;
				}
			}

			if (data.allTeams[parsedValue].seedGroup == 4) {
				var x = utils.randNumber(10);
				if (x <= 2) {
					tablePos = utils.randTablePos(8, 11);
				} else if (x >= 2 && x <= 10) {
					tablePos = utils.randTablePos(12, 15);
				} else {
					return false;
				}
			}

			//is team in the draw already? If it is highlight it if it isnt put into draw using table pos number generated by above.
			var inDraw = false;
			for (i = 0; i <= 15; i++) {
				if (textSelected == pickedTeams[i].name) {
					inDraw = true;
					$("td:contains('" + textSelected + "')").addClass("red");

				
				}

			};


			flagValue = data.allTeams[parsedValue].number;
			if (inDraw == false) {

              //  removedTeam = $('td').eq(tablePos).text();
				$('td').eq(tablePos).text(textSelected).prepend(flagArray.flagsG[flagValue]).addClass('red');
			}
            
            var newTeamArray = [];
            $("#tables").find("tr").each(function(){
                x = $(this).find('td.table').text();
                newTeamArray.push(x);

                for(i=0; i<=newTeamArray.length; i++) {
                    if (newTeamArray[i] == "") {
                        newTeamArray.splice(i, 1);
                    }
                }
            });
         
        

            displayDraw.displayseed(newTeamArray);

			$("select").hide();

			$(function() {
				$("#teamPicked").html("" + textSelected + " picked").show();
			});

			// event.stopPropagation(); //test if removal causes issues
            selectedTeam = data.allTeams[parsedValue];

       

		});


		//draw button
		$('#draw').click(function() {
			scroll();
			displayDraw.drawIndividual();

		});

		//draw all teams button
		$('#drawAll').click(function() {
			displayDraw.drawAllTeams();
		});

		//reset button
		$('#reset').click(function() {
			buttons.reset();
		});

		(function() {
			$("#pickTeam").show();
			$("select").hide();
		});

	});
});
