


//	Team object creations
//	europe
//	Team object constructor



//	Team object creations
//	europe
	var austria = new team("Austria", 6, 3, 1);
	var belgium = new team("Belgium", 2, 4, 1);
	var bosnia = new team("Bosnia & Herz.", 5, 6, 1);
	var bulgaria = new team("Bulgaria", 7, 8, 1);
	var croatia = new team("Croatia", 5, 16, 1);
	var czech = new team("Czech Rep.", 6, 17, 1);
	var denmark = new team("Denmark", 5, 18, 1);
	var england = new team("England", 5, 21, 1);
	var finland = new team("Finland", 7, 22, 1);
	var france = new team("France", 3, 23, 1);
	var germany = new team("Germany", 1, 24, 1);
	var greece = new team("Greece", 5, 26, 1);
	var hungary = new team("Hungary", 6, 29, 1);
	var israel = new team("Israel", 7, 32, 1);
	var italy = new team("Italy", 3, 33, 1);
	var montenegro = new team("Montenegro", 7, 41, 1);
	var netherlands = new team("Netherlands", 2, 43, 1);
	var northernIreland = new team("N.Ireland", 7, 47, 1);
	var norway = new team("Norway", 7, 48, 1);
	var poland = new team("Poland", 7, 53, 1);
	var portugal = new team("Portugal", 3, 54, 1);
	var ireland = new team("Ireland", 7, 56, 1);
	var romania = new team("Romania", 5, 57, 1);
	var russia = new team("Russia", 5, 58, 1);
	var scotland = new team("Scotland", 6, 60, 1);
	var serbia = new team("Serbia", 6, 62, 1);
	var slovakia = new team("Slovakia", 6, 63, 1);
	var slovenia = new team("Slovenia", 6, 64, 1);
	var spain = new team("Spain", 1, 67, 1);
	var sweden = new team("Sweden", 6, 68, 1);
	var switzerland = new team("Switzerland", 5, 69, 1);
	var turkey = new team("Turkey", 6, 72, 1);
	var ukraine = new team("Ukraine", 5, 74, 1);
	var wales = new team("Wales", 7, 79, 1);
//	africa
	var algeria = new team("Algeria", 8, 0, 2);
	var burkinaFaso = new team("Burkina Faso", 8, 9, 2);
	var cameroon = new team("Cameroon", 8, 10, 2);
	var ivoryCoast = new team("Cote D'Ivoire", 8, 15, 2);
	var egypt = new team("Egypt", 8, 20, 2);
	var ghana = new team("Ghana", 8, 25, 2);
	var guinea = new team("Guinea", 9, 27, 2);
	var mali = new team("Mali", 9, 39, 2);
	var morocco = new team("Morocco", 9, 42, 2);
	var nigeria = new team("Nigeria", 8, 45, 2);
	var senegal = new team("Senegal", 9, 61, 2);
	var southAfrica = new team("South Africa", 9, 65, 2);
	var tunisia = new team("Tunisia", 8, 71, 2);
	var zambia = new team("Zambia", 9, 80, 2);
//	North & Central America
	var costaRica = new team("Costa Rica", 4, 14, 3);
	var honduras = new team("Honduras", 4, 28, 3);
	var jamaica = new team("Jamaica", 4, 34, 3);
	var mexico = new team("Mexico", 4, 40, 3);
	var panama = new team("Panama", 4, 50, 3);
	var usa = new team("USA", 4, 76, 3);
//	South America
	var argentina = new team("Argentina", 4, 1, 4);
	var bolivia = new team("Bolivia", 4, 5, 4);
	var brazil = new team("Brazil", 4, 7, 4);
	var chile = new team("Chile", 4, 11, 4);
	var colombia = new team("Colombia", 4, 13, 4);
	var ecuador = new team("Ecuador", 4, 19, 4);
	var paraguay = new team("Paraguay", 4, 51, 4);
	var peru = new team("Peru", 4, 52, 4);
	var uruguay = new team("Uruguay", 4, 75, 4);
	var venezuela = new team("Venezuela", 4, 78, 4);
//	Asia-Oceania
	var australia = new team("Australia", 4, 2, 5);
	var china = new team("China", 4, 12, 5);
	var iran = new team("Iran", 4, 30, 5);
	var iraq = new team("Iraq", 4, 31, 5);
	var japan = new team("Japan", 4, 35, 5);
	var jordan = new team("Jordan", 4, 36, 5);
	var kuwait = new team("Kuwait", 4, 37, 5);
	var lebanon = new team("Lebanon", 4, 38, 5);
	var northKorea = new team("North Korea", 4, 46, 5);
	var oman = new team("Oman", 4, 49, 5);
	var qatar = new team("Qatar", 4, 55, 5);
	var saudiArabia = new team("Saudi Arabia", 4, 59, 5);
	var southKorea = new team("South Korea", 4, 66, 5);
	var thailand = new team("Thailand", 4, 70, 5);
	var uae = new team("UAE", 4, 73, 5);
	var uzbekistan = new team("Uzbekistan", 4, 77, 5);
	var newZealand = new team("New Zealand", 4, 44, 5);

	element = 0;
	var elementCounter = 0;
	var screenWidth = true;
	var zone = 'world';
	var flagArray = new generate_flags(zone);
	var drawfullWC = new drawfull();
	var utilsWC = new utils();
	var buttonsWC = new buttons();

//	Function to pick random teams from each seed group & input into table
	jQuery(document).ready(function() {

		buttonsWC.reset();

		//draw all teams button
		function drawAllTeams() {
			jQuery("select").hide();
			jQuery('td').removeClass("hide");
			jQuery('#pickTeam').hide();
			jQuery('#teamPicked').show().html('Draw complete');
			element = 32;
		}

/*
		function getScreenSize() {

			screenWidthSize = jQuery(window).width()

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
			jQuery("select").hide();
			jQuery('#pickTeam').hide();
			jQuery('#teamPicked').show().html('Draw in progress');
			jQuery('td:eq(' + element + ')').removeClass("hide");
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
					jQuery('#teamPicked').show().html('Draw complete');

				};
				return elementCounter;
			} /*else {
				element++;

				if (element >= 32) { //show team picked on button
					jQuery('#teamPicked').show().html('Draw complete');
				};

			}*/
			//scroll();
		}

		

		drawfullWC.drawWorld();
		console.log(drawfullWC.drawnTeams);
		console.log(drawfullWC.allTeams);

		//pick team button
		jQuery("#teamPicked").hide();
		jQuery("select").hide();

		//select team from dynamically created select list
		jQuery("#pickTeam").click(function() {

			//getScreenSize();
			//if (screenWidth==true) {
				jQuery("#pickTeam").hide();
				jQuery("select").show();
				var options = '<option value="blank">Pick team</option>';
				for (var i = 0; i < allTeams.length; i++) {
					options += '<option value=' + allTeams[i].number + '>' + allTeams[i].name + '</option>'
				};
				jQuery('select').html(options);



				/*} else {
					jQuery("#pickTeam").hide();
					jQuery("select").show();
					var options = '<option value="blank">Pick</option>';
					for (var i = 0; i < allTeams.length; i++) {
						options += '<option value=' + allTeams[i].number + '>' + allTeams[i].name + '</option>'
					};
					jQuery('select').html(options);}*/

		});

		jQuery('select').change(function() { //take selected option

			pickedTeams = drawnTeams; //had to assign to a new array. Causing issues (##need to find out why##)
			var optionSelected = jQuery(this).find("option:selected");
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
						jQuery("td:contains('" + textSelected + "')").addClass("red");
						break;
					}
				}
			};

			var x=0;
			if (inDraw == false) {
				while (inDraw == false) {
					randomGroup = utilsWC.randNumber(7);
					for (x=1; x<=3; x++){
						if (allTeams[parsedValue].region==allGroups[randomGroup][x].region) {
							flagValue = allTeams[parsedValue].number;
							jQuery('td').eq(x + (randomGroup * 4) ).text(textSelected).prepend(flagArray.flagsG[flagValue]).addClass('red');
							removedTeam = allGroups[randomGroup][x];
							console.log(removedTeam);
							x=0;
							inDraw = true;
							
							break;
						}

					}
					x=0;
				}
			}
			
			jQuery("select").hide();

			jQuery(function() {
				jQuery("#teamPicked").html("" + textSelected + " picked").show();
			});

			//event.stopPropagation(); //test if removal causes issues

		});


		//draw button
		jQuery('#draw').click(function() {
			scroll();
			drawIndividual();

		});

		//draw all teams button
		jQuery('#drawAll').click(function() {
			drawAllTeams();
		});

		//reset button
		jQuery('#reset').click(function() {
			buttonsWC.reset();
		});

		(function() {
			jQuery("#pickTeam").show();
			jQuery("select").hide();
		});

	});
