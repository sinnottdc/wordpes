
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

function generate_flags() {

        var createImage = function(src, title) {

        var img   = new Image();

        img.src   = src;
        img.alt   = title;
        img.title = title;

        return img; 

    };

        //  array of images
        var flagArray = [];

        //  push two images to the array
        //  images.push(createImage("images/Austria.jpg", "Austria"));
        for (flags=0; flags<=33; flags++) {
            flagArray.push(createImage(template_url + "/images/euroFlags/" + [flags] +".png"));
        }

        this.flagsG = flagArray;
    }

    var flagArray = new generate_flags();
    










jQuery(function ($) {
	 
//	Function to pick random teams from each seed group & input into table
	$(document).ready(function() {



		//used for table positions for teams not in draw
		function randTablePos(min, max) {
			rndTabPos = Math.floor((Math.random() * (max - min + 1)) + min);
			return rndTabPos;
		}

		//reset button function
		function reset() {
			drawfull(); //re-run draw
			$('td').removeClass("red");
			$('td.table').addClass("hide");
			element = 0;
			elementCounter = 0;
			$('select').hide();
			$('#pickTeam').show();
			$("#teamPicked").hide();
			pickedTeams = []; // reset picked teams array as it was causing issues if not
			$("html, body").animate({scrollTop:0}, 300);
		}

		//draw all teams button
		function drawAllTeams() {
			$("select").hide();
			$('td').removeClass("hide");
			$('#pickTeam').hide();
			$('#teamPicked').show().html('Draw complete');
			element = 16;
		}

     
		function getScreenSize(){ 

			screenWidthSize = $(window).width()

			if (screenWidthSize >= 730) {
				screenWidth = true;
			} else {
				screenWidth = false;
			}
			return screenWidth;
		}


		//draw teams individually button
		function drawIndividual() {
			/*if (element==0) {
		getScreenSize();}*/
			$("select").hide();
			$('#pickTeam').hide();
			$('#teamPicked').show().html('Draw in progress');
			$('td:eq(' + element + ')').removeClass("hide");
			//if (screenWidth==true) {
				elementCounter++;
				element = element + 4;
				if (elementCounter==4) {
					element = 1;
				} else if (elementCounter==8) {
					element = 2;
				} else if (elementCounter==12) {
					element = 3;
				} 

				if (element >= 16) { //show team picked on button
					$('#teamPicked').show().html('Draw complete');

				};
				return elementCounter;
		}

            function displayseed(seeds) {
 
                for (i=0; i<seeds.length; i++) {   
                
                seedTeam = seeds[i];  

                $('.seed_display').find('td').eq(i).text(seedTeam);
            }
        }



//Knuth shuffle function to mix up arrays
            function shuffle(array) {
                var currentIndex = array.length,
                temporaryValue, randomIndex;

                //while elements remain to be shuffled
                while (0 !== currentIndex) {

                    // pick a remaining element
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    //Swap it with current element
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            }

		//function for drawing all teams based on seed/seedgroup
		function drawfull() {

			

			//seed groups
			var seedOne = [france, germany, italy, netherlands, belgium, spain]; // 6 teams 
			var seedTwo = [portugal, greece, croatia, bosnia, england, switzerland, ukraine, russia, denmark, romania, ]; // 10 teams
			var seedThree = [scotland, sweden, serbia, turkey, hungary, czech, slovenia, austria, slovakia, ]; //  9 teams
			var seedFour = [montenegro, norway, finland, poland, ireland, israel, bulgaria, northernIreland, wales]; // 9 teams
			shuffle(seedOne);
			shuffle(seedTwo);
			shuffle(seedThree);
			shuffle(seedFour);

			//organise arrays into alphabetical order for select list
			drawnTeams = [];
			allTeams = seedOne.concat(seedTwo, seedThree, seedFour);
			allTeams.sort(function(a, b) {
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				return (nameA < nameB) ? -1 : nameA > nameB ? 1 : 0;
			});


			//noTeams = how many teams to pick / teams = name of array / tablePosition = td position in dom 
			function draw(noTeams, teams, tablePosition) {
				noTeams = noTeams - 1;
				for (i = 0, x = 0; i <= noTeams; i++, x++) {
					var j = teams[x];
					$('.myTables').find('td').eq(i + tablePosition).text(j.name).prepend(flagArray.flagsG[j.number]).addClass("flag");
					tablePosition = tablePosition + 3;
				};

            


                /*
                for (i = 0, x = 0; i <= noTeams; i++, x++) {
                    var j = teams[x];
                    $('.seed_display').find('td').eq(i).text(j.name).prepend(flagArray[j.number]).addClass("flag");
                };*/
			}

			//positions 1 for each group - Containing 3 or 4 teams from seed 1 & possibly 1 team from seed 2 
			(function() {
				shuffle(seedTwo);
				remainingSeedTwo = seedTwo.splice(3, 4) //take 4 teams from seed 2 for round 3 & 4 draw (to avoid top seed picked in later rounds)
				var b = seedTwo.splice(5, 1); // pick 1 team from seed 2 so possibility of 2nd seed team getting in no.1 position.
				var finalTeamsA = b.concat(seedOne); // adding 1 team from seed 2 to seed 1 array
				shuffle(finalTeamsA); // shuffle the array
				remainingTopSeeds = finalTeamsA.splice(3, 3); // slice 4 teams and put them into position 1 of each group. Return remaining teams
				shuffle(finalTeamsA); // shuffle array for random positions else seed 2 will always go into group D if picked.
				draw(4, finalTeamsA, 0); //position 1-4 draw}
				drawnTeams = drawnTeams.concat(finalTeamsA);
                s1 = shuffle(finalTeamsA);
			})();

			//positions 2 for each group - Containing remaining teams from seed 1 all teams from seed 2 & possibly 2 from seed 3
			(function() {
				var b = seedThree.splice(7, 2); //7 Add possible 2 teams from seed 3 top possibly be drawn in round 2 b = 2
				var c = remainingTopSeeds.concat(seedTwo); //remainingTopSeeds = 4 ..seedTwo = 5  c = 9
				roundTwo = b.concat(c); // roundTwo = 11
				shuffle(roundTwo);
				var a = roundTwo.splice(6, 4);
				draw(4, a, 1);
				drawnTeams = drawnTeams.concat(a);
                s2 = shuffle(a);
			})();



			(function() {
				remainingSeedThree = seedThree.splice(5, 2)
				b = remainingSeedTwo.concat(seedThree); // 7 + 4
				shuffle(b);
				var a = seedFour.splice(6, 2);
				seedThreeFinal = a.concat(b);
				shuffle(seedThreeFinal);
				var c = seedThreeFinal.splice(4, 4);
				draw(4, c, 2);
				drawnTeams = drawnTeams.concat(c);
                s3 = shuffle(c);
			})();

			(function() {
				a = remainingSeedThree.concat(seedThreeFinal);
				shuffle(a);
				a = a.splice(3, 4);
				draw(4, a, 3);
				drawnTeams = drawnTeams.concat(a);
                s4 = shuffle(a);
			})();

             //concat teams to pass into displayseed function to display seeds....funniy enough
        y = s1.concat(s2, s3, s4);

        seedArray = [];

        for (i=0; i<=15; i++) {
            name = y[i].name;
            seedArray = seedArray.concat(name);

        }
        //displayseed(seedArray);
        displayseed(seedArray);
		};

       
		drawfull();

  
       
      




		//pick team button
		$("#teamPicked").hide();
		$("select").hide();


		//select team from dynamically created select list
		$("#pickTeam").click(function() {
			//getScreenSize();
			//if (screenWidth==true) {
				$("#pickTeam").hide();
				$("select").show();
				var options = '<option value="blank">Pick team</option>';
				for (var i = 0; i < allTeams.length; i++) {
					options += '<option value=' + allTeams[i].number + ' data-image="images/euroFlags/"' + [i] + '>' + allTeams[i].name + '</option>'
				};

				$('select').html(options);/*} else {
					$("#pickTeam").hide();
					$("select").show();
					var options = '<option value="blank">Pick</option>';
					for (var i = 0; i < allTeams.length; i++) {
						options += '<option value=' + allTeams[i].number + '>' + allTeams[i].name + '</option>'
					};
					$('select').html(options);}*/

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
			if (allTeams[parsedValue].seedGroup == 1) {
				var x = randNumber(10);
				if (x <= 7) {
					tablePos = randTablePos(0, 3);
				} else if (x >= 8 && x <= 9) {
					tablePos = randTablePos(4, 7);
				} else if (x == 10) {
					tablePos = randTablePos(8, 11);
				} else {
					return false;
				}
			}

			if (allTeams[parsedValue].seedGroup == 2) {
				var x = randNumber(10);
				if (x <= 2) {
					tablePos = randTablePos(0, 3);
				} else if (x >= 3 && x <= 8) {
					tablePos = randTablePos(4, 7);
				} else if (x >= 8 && x <= 10) {
					tablePos = randTablePos(8, 11);
				} else {
					return false;
				}
			}


			if (allTeams[parsedValue].seedGroup == 3) {
				var x = randNumber(10);
				if (x <= 1) {
					tablePos = randTablePos(4, 7);
				} else if (x >= 2 && x <= 8) {
					tablePos = randTablePos(8, 11);
				} else if (x >= 9 && x <= 10) {
					tablePos = randTablePos(12, 15);
				} else {
					return false;
				}
			}

			if (allTeams[parsedValue].seedGroup == 4) {
				var x = randNumber(10);
				if (x <= 2) {
					tablePos = randTablePos(8, 11);
				} else if (x >= 2 && x <= 10) {
					tablePos = randTablePos(12, 15);
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


			flagValue = allTeams[parsedValue].number;
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
         
        

            displayseed(newTeamArray);

			$("select").hide();

			$(function() {
				$("#teamPicked").html("" + textSelected + " picked").show();
			});

			// event.stopPropagation(); //test if removal causes issues
            selectedTeam = allTeams[parsedValue];

       

		});


		//draw button
		$('#draw').click(function() {
			scroll();
			drawIndividual();

		});

		//draw all teams button
		$('#drawAll').click(function() {
			drawAllTeams();
		});

		//reset button
		$('#reset').click(function() {
			reset();
		});

		(function() {
			$("#pickTeam").show();
			$("select").hide();
		});

	});
});
