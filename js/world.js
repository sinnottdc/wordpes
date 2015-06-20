(function($){
//	Object constructor
	function to(name, seedGroup, region, number) {
		this.name = name;
		this.seedGroup = seedGroup;
		this.region = region; //1=Europe / 2=Africa / 3=North & Central America / 4=South America / 5= Asia/Oceana
		this.number = number;
	}

//	Team object creations
//	europe
//	Team object creations
//	europe
	var austria = new to("Austria", 6, 1, 3);
	var belgium = new to("Belgium", 2, 1, 4);
	var bosnia = new to("Bosnia & Herz.", 5, 1, 6);
	var bulgaria = new to("Bulgaria", 7, 1, 8);
	var croatia = new to("Croatia", 5, 1, 16);
	var czech = new to("Czech Rep.", 6, 1, 17);
	var denmark = new to("Denmark", 5, 1, 18);
	var england = new to("England", 5, 1, 21);
	var finland = new to("Finland", 7, 1, 22);
	var france = new to("France", 3, 1, 23);
	var germany = new to("Germany", 1, 1, 24);
	var greece = new to("Greece", 5, 1, 26);
	var hungary = new to("Hungary", 6, 1, 29);
	var israel = new to("Israel", 7, 1, 32);
	var italy = new to("Italy", 3, 1, 33);
	var montenegro = new to("Montenegro", 7, 1, 41);
	var netherlands = new to("Netherlands", 2, 1, 43);
	var northernIreland = new to("N.Ireland", 7, 1, 47);
	var norway = new to("Norway", 7, 1, 48);
	var poland = new to("Poland", 7, 1, 53);
	var portugal = new to("Portugal", 3, 1, 54);
	var ireland = new to("Ireland", 7, 1, 56);
	var romania = new to("Romania", 5, 1, 57);
	var russia = new to("Russia", 5, 1, 58);
	var scotland = new to("Scotland", 6, 1, 60);
	var serbia = new to("Serbia", 6, 1, 62);
	var slovakia = new to("Slovakia", 6, 1, 63);
	var slovenia = new to("Slovenia", 6, 1, 64);
	var spain = new to("Spain", 1, 1, 67);
	var sweden = new to("Sweden", 6, 1, 68);
	var switzerland = new to("Switzerland", 5, 1, 69);
	var turkey = new to("Turkey", 6, 1, 72);
	var ukraine = new to("Ukraine", 5, 1, 74);
	var wales = new to("Wales", 7, 1, 79);
//	africa
	var algeria = new to("Algeria", 8, 2, 0);
	var burkinaFaso = new to("Burkina Faso", 8, 2, 9);
	var cameroon = new to("Cameroon", 8, 2, 10);
	var ivoryCoast = new to("Cote D'Ivoire", 8, 2, 15);
	var egypt = new to("Egypt", 8, 2, 20);
	var ghana = new to("Ghana", 8, 2, 25);
	var guinea = new to("Guinea", 9, 2, 27);
	var mali = new to("Mali", 9, 2, 39);
	var morocco = new to("Morocco", 9, 2, 42);
	var nigeria = new to("Nigeria", 8, 2, 45);
	var senegal = new to("Senegal", 9, 2, 61);
	var southAfrica = new to("South Africa", 9, 2, 65);
	var tunisia = new to("Tunisia", 8, 2, 71);
	var zambia = new to("Zambia", 9, 2, 80);
//	North & Central America
	var costaRica = new to("Costa Rica", 4, 3, 14);
	var honduras = new to("Honduras", 4, 3, 28);
	var jamaica = new to("Jamaica", 4, 3, 34);
	var mexico = new to("Mexico", 4, 3, 40);
	var panama = new to("Panama", 4, 3, 50);
	var usa = new to("USA", 4, 3, 76);
//	South America
	var argentina = new to("Argentina", 4, 4, 1);
	var bolivia = new to("Bolivia", 4, 4, 5);
	var brazil = new to("Brazil", 4, 4, 7);
	var chile = new to("Chile", 4, 4, 11);
	var colombia = new to("Colombia", 4, 4, 13);
	var ecuador = new to("Ecuador", 4, 4, 19);
	var paraguay = new to("Paraguay", 4, 4, 51);
	var peru = new to("Peru", 4, 4, 52);
	var uruguay = new to("Uruguay", 4, 4, 75);
	var venezuela = new to("Venezuela", 4, 4, 78);
//	Asia-Oceania
	var australia = new to("Australia", 4, 5, 2);
	var china = new to("China", 4, 5, 12);
	var iran = new to("Iran", 4, 5, 30);
	var iraq = new to("Iraq", 4, 5, 31);
	var japan = new to("Japan", 4, 5, 35);
	var jordan = new to("Jordan", 4, 5, 36);
	var kuwait = new to("Kuwait", 4, 5, 37);
	var lebanon = new to("Lebanon", 4, 5, 38);
	var northKorea = new to("North Korea", 4, 5, 46);
	var oman = new to("Oman", 4, 5, 49);
	var qatar = new to("Qatar", 4, 5, 55);
	var saudiArabia = new to("Saudi Arabia", 4, 5, 59);
	var southKorea = new to("South Korea", 4, 5, 66);
	var thailand = new to("Thailand", 4, 5, 70);
	var uae = new to("UAE", 4, 5, 73);
	var uzbekistan = new to("Uzbekistan", 4, 5, 77);
	var newZealand = new to("New Zealand", 4, 5, 44);

	element = 0;
	var elementCounter = 0;
	var screenWidth = true;


	var createImage = function(src, title) {
		var img   = new Image();
		img.src   = src;
		img.alt   = title;
		img.title = title;
		return img; 
	};

//	array of images
	var flagArray = [];

//	push two images to the array
//	images.push(createImage("images/Austria.jpg", "Austria"));
	for (flags=0; flags<=80; flags++) {
		flagArray.push(createImage(template_url + "/images/worldFlags/" + [flags] +".png"));
	}
//	Function to pick random teams from each seed group & input into table
	$(document).ready(function() {


		//used for table positions for teams not in draw
		function randNumber(max) {
			rndNumb = Math.floor((Math.random() * max) + 1);
			return rndNumb;
		}

		//used for table positions for teams not in draw
		function randTablePos(min, max) {
			rndTabPos = Math.floor((Math.random() * (max - min + 1)) + min);
			return rndTabPos;
		}

		//reset button function
		function reset() {
			drawfull(); //re-run draw
			$('td').removeClass("red");
			$('td').addClass("hide");
			element = 0;
			elementCounter = 0;

			$('select').hide();
			$('#pickTeam').show();
			$("#teamPicked").hide();
			pickedTeams = []; // reset picked teams array as it was causing issues if not
			// $("html, body").animate({scrollTop:0}, 300);
			// testBackButton();
			if (window.matchMedia('(max-width: 370px)').matches) {
				$("html, body").animate({scrollTop:0}, 300);
			}
		}

		//draw all teams button
		function drawAllTeams() {
			$("select").hide();
			$('td').removeClass("hide");
			$('#pickTeam').hide();
			$('#teamPicked').show().html('Draw complete');
			element = 32;
		}

/*
		function getScreenSize() {

			screenWidthSize = $(window).width()

			if (screenWidthSize >= 730) {
				screenWidth = true;
			} else {
				screenWidth = false;
			}
			return screenWidth;
		}*/

		//draw teams individually button
		function drawIndividual() {
			/*if (element==0) {
		getScreenSize();}*/
			$("select").hide();
			$('#pickTeam').hide();
			$('#teamPicked').show().html('Draw in progress');
			$('td:eq(' + element + ')').removeClass("hide");
			if (screenWidth==true) {
				elementCounter++;
				element = element + 4;
				if (elementCounter==8) {
					element = 1;
				} else if (elementCounter==16) {
					element = 2;
				} else if (elementCounter==24) {
					element = 3;
				} 

				if (element >= 32) { //show team picked on button
					$('#teamPicked').show().html('Draw complete');

				};
				return elementCounter;
			} /*else {
				element++;

				if (element >= 32) { //show team picked on button
					$('#teamPicked').show().html('Draw complete');
				};

			}*/
			//scroll();
		}

		//function for drawing all teams based on seed/seedgroup
		function drawfull() {

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

			function sortTeams(pickedTeams) {
				groupA = [];
				groupB = [];
				groupC = [];
				groupD = [];
				groupE = [];
				groupF = [];
				groupG = [];
				groupH = [];

				for (i = 0; i < 16; i++) {
					var x = pickedTeams.splice(i, 1);
					groupA = groupA.concat(x);
					groupB = pickedTeams;
				}

				for (i = 0; i < 8; i++) {
					var x_a = groupA.splice(i, 1);
					groupC = groupC.concat(x_a);
					var x_b = groupB.splice(i, 1);
					groupD = groupD.concat(x_b);
				}

				for (i = 0; i < 4; i++) {
					var x_c = groupA.splice(i, 1);
					groupE = groupE.concat(x_c);
					var x_d = groupB.splice(i, 1);
					groupF = groupF.concat(x_d);
					var x_e = groupC.splice(i, 1);
					groupG = groupG.concat(x_e);
					var x_f = groupD.splice(i, 1);
					groupH = groupH.concat(x_f);
				}
			}

			function jumbleTeam(group) {
				x = group.splice(1, 3);
				shuffle(x);
				group = group.concat(x);
				return group;
			}



			function checkEuroTeams(allGroups) {

				var keepValue = 7;
				for (j = 0; j < 7; j++) { //group
					var europeCounter = 0;

				for (i = 0; i <= 3; i++) { //first team index

					if (allGroups[j][i].region == 1) {
						europeCounter++;
					}
					if (europeCounter >= 3) {
						removedEuro = allGroups[j].splice(3, 1);
						for (t = keepValue; t >= 0; t--) {
							var reset = false;



							if (allGroups[t][0].region == 4) {
								reset = true;
								swapTeam = allGroups[t].splice(1, 1);
								allGroups[t] = allGroups[t].concat(removedEuro);
								allGroups[j] = allGroups[j].concat(swapTeam);
							}

							if (reset == true) {
								i = 0;
								europeCounter = 0;
								keepValue = t - 1;
								break
							}
						}
					}
				}
				}
				return allGroups
			}

			function checkRestTeams (allGroups){


				for (j = 0; j < 7; j++) { //group
					var africaCounter = 0;
					var NCAmericaCounter = 0;
					var SAmericaCounter = 0;
					var AsiaOceanaCounter =0;
					for (i = 0; i <= 3; i++) { //first team index
						if (allGroups[j][i].region == 2){		
							africaCounter++;
						} else if (allGroups[j][i].region == 3){
							NCAmericaCounter++;
						} else if (allGroups[j][i].region == 4){
							SAmericaCounter++;
						} else if (allGroups[j][i].region == 5) {
							AsiaOceanaCounter++;
						}

						if ((africaCounter >= 2) || (NCAmericaCounter >= 2) || (SAmericaCounter >= 2) || (AsiaOceanaCounter >=2)){		
							removed = allGroups[j].splice(1, 1);
							toReplace = euroSeedOne.splice(0,1);
							allGroups[j] = allGroups[j].concat(toReplace);
							break
						} 

					}

				}
				return allGroups
			}





			//Top seed groups
			var topSeedOne = [brazil, argentina, germany, spain]; //1
			var topSeedTwo = [colombia, uruguay, belgium, netherlands]; //2
			var topSeedThree = [italy, france, portugal]; //3
			var topSeedFour = [chile, costaRica, mexico]; //4

			//Euro seed groups
			var euroSeedOne = [switzerland, greece, croatia, england, czech, sweden, denmark ]; //5  10teams
			var euroSeedTwo = [scotland, serbia, turkey,  bosnia, hungary,   romania, ukraine, russia,  austria, ]; //6 9 teams
			var euroSeedThree = [montenegro, norway, finland, poland, ireland, israel, bulgaria, northernIreland, wales, slovenia, slovakia]; //7 9 teams

			//africa seed groups
			var africaOne = [algeria, ivoryCoast, nigeria, ghana, egypt, tunisia, cameroon, burkinaFaso]; //8
			var africaTwo = [guinea, mali, morocco, senegal, southAfrica, zambia]; //9

			//North & Central America

			var ncAmerica = [honduras, jamaica, panama, usa]; //11

			//South America
			var sAmericaOne = []; //12
			var sAmericaTwo = [bolivia, ecuador, paraguay, peru, venezuela]; //13

			//Asia-Oceania
			var asiaOne = [japan,  southKorea, uae, australia];
			var asiaTwo = [china, iraq, kuwait, lebanon,  oman, northKorea, qatar, saudiArabia, thailand, newZealand,iran, uzbekistan, jordan, ];

			//group arrays for draw



			//organise arrays into alphabetical order for select list
			drawnTeams = [];
			pickedTeams = [];
			allTeams = topSeedOne.concat(topSeedTwo, topSeedThree, topSeedFour, euroSeedOne, euroSeedTwo, euroSeedThree, africaOne, africaTwo, ncAmerica, sAmericaOne, sAmericaTwo, asiaOne, asiaTwo);
			allTeams.sort(function(a, b) {
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				return (nameA < nameB) ? -1 : nameA > nameB ? 1 : 0;
			});

			//shuffle all arrays
			(function() {
				var allTeamArrays = [topSeedOne, topSeedTwo, topSeedThree, topSeedFour, euroSeedOne, euroSeedTwo, euroSeedThree, africaOne, africaTwo, ncAmerica, sAmericaOne, sAmericaTwo, asiaOne, asiaTwo];
				for (i = 0; i < allTeamArrays.length; i++)
					shuffle(allTeamArrays[i]);

			})();
			//sort top seeds
			(function() {
				var randNum = randNumber(100);


				//choose top seed teams (8). All remaining teams put back into general arrays  ***1****
				if (randNum >= 96) {
					var topSeedOneRemove = topSeedOne.splice(3, 1);
					var topSeedTwoRemove = topSeedTwo.splice(3, 1);
					if (topSeedOneRemove[0].region == 1) {
						euroSeedOne = euroSeedOne.concat(topSeedOneRemove);
						var topSeedThreeRemove = topSeedThree.splice(2, 1);
						topSeedOne = topSeedOne.concat(topSeedThreeRemove);
					} else {
						sAmericaOne = sAmericaOne.concat(topSeedOneRemove);
						var topSeedFourRemove = topSeedFour.splice(2, 1);
						topSeedOne = topSeedOne.concat(topSeedFourRemove);
					}

					if (topSeedTwoRemove[0].region == 1) {
						euroSeedOne = euroSeedOne.concat(topSeedTwoRemove);
						var topSeedThreeRemovetwo = topSeedThree.splice(1, 1)
						topSeedTwo = topSeedTwo.concat(topSeedThreeRemovetwo);
					} else {
						sAmericaOne = sAmericaOne.concat(topSeedTwoRemove);
						var topSeedFourRemoveTwo = topSeedFour.splice(1, 1);
						topSeedTwo = topSeedTwo.concat(topSeedFourRemoveTwo);
					}

					euroSeedOne = euroSeedOne.concat(topSeedThree);
					sAmericaOne = sAmericaOne.concat(topSeedFour);

				} else if (randNum >= 86 && randNum <= 95) {
					var topSeedTwoRemove_2 = topSeedTwo.splice(1, 3);
					var seedLength = topSeedTwoRemove_2.length;
					for (i = 0; i < seedLength; i++) {
						if (topSeedTwoRemove_2[i].region == 1) {
							euroSeedOne = euroSeedOne.concat(topSeedTwoRemove_2[i]);
							var topSeedThreeRemove_1 = topSeedThree.splice(topSeedThree.length - 1, 1);
							topSeedTwo = topSeedTwo.concat(topSeedThreeRemove_1);
						} else {
							sAmericaOne = sAmericaOne.concat(topSeedTwoRemove_2[i]);
							var topSeedFourRemove_1 = topSeedFour.splice(topSeedFour.length - 1, 1);
							topSeedTwo = topSeedTwo.concat(topSeedFourRemove_1);
						}
					}
					euroSeedOne = euroSeedOne.concat(topSeedThree);
					sAmericaOne = sAmericaOne.concat(topSeedFour);

				} else if (randNum >= 71 && randNum <= 85) {
					var topSeedTwoRemove_2 = topSeedTwo.splice(2, 2);
					var seedLength = topSeedTwoRemove_2.length;
					for (i = 0; i < seedLength; i++) {
						if (topSeedTwoRemove_2[i].region == 1) {
							euroSeedOne = euroSeedOne.concat(topSeedTwoRemove_2[i]);
							var topSeedThreeRemove_1 = topSeedThree.splice(topSeedThree.length - 1, 1);
							topSeedTwo = topSeedTwo.concat(topSeedThreeRemove_1);
						} else {
							sAmericaOne = sAmericaOne.concat(topSeedTwoRemove_2[i]);
							var topSeedFourRemove_1 = topSeedFour.splice(topSeedFour.length - 1, 1);
							topSeedTwo = topSeedTwo.concat(topSeedFourRemove_1);
						}
					}
					euroSeedOne = euroSeedOne.concat(topSeedThree);
					sAmericaOne = sAmericaOne.concat(topSeedFour);

				} else if (randNum >= 50 && randNum <= 70) {
					var topSeedTwoRemove_2 = topSeedTwo.splice(3, 1);
					var seedLength = topSeedTwoRemove_2.length;
					for (i = 0; i < seedLength; i++) {
						if (topSeedTwoRemove_2[i].region == 1) {
							euroSeedOne = euroSeedOne.concat(topSeedTwoRemove_2[i]);
							var topSeedThreeRemove_1 = topSeedThree.splice(topSeedThree.length - 1, 1);
							topSeedTwo = topSeedTwo.concat(topSeedThreeRemove_1);
						} else {
							sAmericaOne = sAmericaOne.concat(topSeedTwoRemove_2[i]);
							var topSeedFourRemove_1 = topSeedFour.splice(topSeedFour.length - 1, 1);
							topSeedTwo = topSeedTwo.concat(topSeedFourRemove_1);
						}
					}
					euroSeedOne = euroSeedOne.concat(topSeedThree);
					sAmericaOne = sAmericaOne.concat(topSeedFour);

				} else {
					euroSeedOne = euroSeedOne.concat(topSeedThree);
					sAmericaOne = sAmericaOne.concat(topSeedFour);
				}
				drawnTeams = topSeedOne.concat(topSeedTwo);

				shuffle(drawnTeams);
			})();

			//Pick 3 South American teams. 2 from seed 1. 1 from seed 2.		*****4*****
			(function() {
				sAmericaLength = sAmericaOne.length;
				sAmerica = sAmericaOne.splice(sAmericaLength - 2, 2);
				sAmerica_2 = sAmericaTwo.splice(3, 2);
				sAmerica = sAmerica.concat(sAmerica_2);
				shuffle(sAmerica);
				drawnTeams = drawnTeams.concat(sAmerica);
			})();

			//pick 5 African teams. 4 from seed 1. 1 from seed 2  *****2*****
			(function() {
				africa_1 = africaOne.splice(4, 4);
				africa_2 = africaTwo.splice(5, 1);
				africa = africa_1.concat(africa_2);
				shuffle(africa);
				drawnTeams = drawnTeams.concat(africa);


			})();
			//pick 4 Asia teams. 4 from seed 1. 2 from seed 2.   *****5*****
			(function() {
				asia_1 = asiaOne.splice(2, 2);
				asia_2 = asiaTwo.splice(7, 1);
				asia = asia_1.concat(asia_2);
				shuffle(asia);
				drawnTeams = drawnTeams.concat(asia);
				//do not add to draw until mixed with north/cent america round (as per official fifa draw)
			})();

			//pick 2 North /Central America teams. then add to Asia & shuffle    *****3*****
			(function() {
				shuffle(ncAmerica);
				ncAmerica_1 = ncAmerica.splice(2, 2);
				drawnTeams = drawnTeams.concat(ncAmerica_1);
			})();

			//pick Euro teams
			(function() {
				var randNum = randNumber(100);

				//6 from top seeds 2 from lower
				if (randNum <= 40) {
					euro_1 = euroSeedOne.splice(2, 8);
					euro_2 = euroSeedTwo.splice(8, 1);
					euro_3 = euroSeedThree.splice(8, 1);
					euro = euro_1.concat(euro_2, euro_3);
					shuffle(euro);

					//5 from top seeds 3 from lower
				} else if (randNum >= 41 && randNum <= 70) {
					euro_1 = euroSeedOne.splice(3, 7);
					euro_2 = euroSeedTwo.splice(7, 2);
					euro_3 = euroSeedThree.splice(8, 1);
					euro = euro_1.concat(euro_2, euro_3);
					shuffle(euro);
				} else {
					//4 from top seeds 4 from lower
					euro_1 = euroSeedOne.splice(4, 6);
					euro_2 = euroSeedTwo.splice(6, 3);
					euro_3 = euroSeedThree.splice(8, 1);
					euro = euro_1.concat(euro_2, euro_3);
					shuffle(euro);
				}
				drawnTeams = drawnTeams.concat(euro);
			})();

			sortTeams(drawnTeams);
			allGroups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];
			checkEuroTeams(allGroups);
			checkRestTeams(allGroups);

			for (ex=0; ex<7; ex++) {
				allGroups[ex] = jumbleTeam(allGroups[ex]);
			}

			shuffle(allGroups);

			function draw(group, tablePosition) {

				for (i = 0; i < 4; i++) {
					flagValue = group[i].number;
					$('.myTables').find('td').eq(tablePosition).text(group[i].name).prepend(flagArray[flagValue]).addClass("flag");
					tablePosition++;
				}
			}

			for (x = 0, y = 0; x <= 7; x++, y = y + 4) {
				draw(allGroups[x], y);
			}


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
					options += '<option value=' + allTeams[i].number + '>' + allTeams[i].name + '</option>'
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

			//is team in the draw already? If it is highlight red if it isnt put into draw using table pos number generated by above.
			var inDraw = false;

			for (i = 0; i <= 7; i++) {
				for (j=0; j<=3; j++) {

					if (textSelected == allGroups[i][j].name) {

						inDraw = true;
						$("td:contains('" + textSelected + "')").addClass("red");
						break;
					}
				}
			};

			var x=0;
			if (inDraw == false) {
				while (inDraw == false) {
					randomGroup = randNumber(7);
					for (x=1; x<=3; x++){
						if (allTeams[parsedValue].region==allGroups[randomGroup][x].region) {
							flagValue = allTeams[parsedValue].number;
							$('td').eq(x + (randomGroup * 4) ).text(textSelected).prepend(flagArray[flagValue]).addClass('red');
							x=0;
							inDraw = true;
							break;
						}

					}
					x=0;
				}
			}
			$("select").hide();

			$(function() {
				$("#teamPicked").html("" + textSelected + " picked").show();
			});

			//event.stopPropagation(); //test if removal causes issues

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
})(jQuery);