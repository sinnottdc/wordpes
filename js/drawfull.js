
	//function for drawing all teams based on seed/seedgroup
		function drawfull() {

			this.drawEuro = function () {

				var data = {
				allTeams : [france, germany, italy, netherlands, belgium, spain, portugal, greece, croatia, bosnia, england, 
				switzerland, ukraine, russia, denmark, romania, scotland, sweden, serbia, turkey, hungary, czech, slovenia, austria, slovakia, montenegro, 
				norway, finland, poland, ireland, israel, bulgaria, northernIreland, wales],
				seedOne : [],
				seedTwo: [],
				seedThree : [],
				seedFour : [],
				drawnTeams : []
				}

			
			//Sort teams into correctly seeded groups
			utils.sortSeedGroups(data.seedOne, data.seedTwo, data.seedThree, data.seedFour, data.allTeams);

			//Shuffle the teams within each group to further randomise the draw
			utils.shuffle(data.seedOne);
			utils.shuffle(data.seedTwo);
			utils.shuffle(data.seedThree);
			utils.shuffle(data.seedFour);

			//organise arrays into alphabetical order for select list
			utils.sortArrays(data.allTeams);

			//positions 1 for each group - Containing 3 or 4 teams from seed 1 & possibly 1 team from seed 2 
			(function() {
				utils.shuffle(data.seedTwo);
				remainingSeedTwo = data.seedTwo.splice(3, 4) //take 4 teams from seed 2 for round 3 & 4 draw (to avoid top seed picked in later rounds)
				var b = data.seedTwo.splice(5, 1); // pick 1 team from seed 2 so possibility of 2nd seed team getting in no.1 position.
				var finalTeamsA = b.concat(data.seedOne); // adding 1 team from seed 2 to seed 1 array
				utils.shuffle(finalTeamsA); // shuffle the array
				remainingTopSeeds = finalTeamsA.splice(3, 3); // slice 4 teams and put them into position 1 of each group. Return remaining teams
				utils.shuffle(finalTeamsA); // shuffle array for random positions else seed 2 will always go into group D if picked.
				draw(4, finalTeamsA, 0); //position 1-4 draw}
				data.drawnTeams = data.drawnTeams.concat(finalTeamsA);
                s1 = utils.shuffle(finalTeamsA);
			})();

			//positions 2 for each group - Containing remaining teams from seed 1 all teams from seed 2 & possibly 2 from seed 3
			(function() {
				var b = data.seedThree.splice(7, 2); //7 Add possible 2 teams from seed 3 top possibly be drawn in round 2 b = 2
				var c = remainingTopSeeds.concat(data.seedTwo); //remainingTopSeeds = 4 ..seedTwo = 5  c = 9
				roundTwo = b.concat(c); // roundTwo = 11
				utils.shuffle(roundTwo);
				var a = roundTwo.splice(6, 4);
				draw(4, a, 1);
				data.drawnTeams = data.drawnTeams.concat(a);
                s2 = utils.shuffle(a);
			})();



			(function() {
				remainingSeedThree = data.seedThree.splice(5, 2)
				b = remainingSeedTwo.concat(data.seedThree); // 7 + 4
				utils.shuffle(b);
				var a = data.seedFour.splice(6, 2);
				seedThreeFinal = a.concat(b);
				utils.shuffle(seedThreeFinal);
				var c = seedThreeFinal.splice(4, 4);
				draw(4, c, 2);
				data.drawnTeams = data.drawnTeams.concat(c);
                s3 = utils.shuffle(c);
			})();

			(function() {
				a = remainingSeedThree.concat(seedThreeFinal);
				utils.shuffle(a);
				a = a.splice(3, 4);
				draw(4, a, 3);
				data.drawnTeams = data.drawnTeams.concat(a);
                s4 = utils.shuffle(a);
			})();
			
        this.allTeams = data.allTeams;
        this.drawnTeams = data.drawnTeams;
		};
		






		this.drawWorld = function() {
			//function for drawing all teams based on seed/seedgroup


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
				utilsWC.shuffle(x);
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
			drawnTeamsWC= [];
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
					utilsWC.shuffle(allTeamArrays[i]);

			})();
			//sort top seeds
			(function() {
				var randNum = utilsWC.randNumber(100);


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

				utilsWC.shuffle(drawnTeams);
			})();

			//Pick 3 South American teams. 2 from seed 1. 1 from seed 2.		*****4*****
			(function() {
				sAmericaLength = sAmericaOne.length;
				sAmerica = sAmericaOne.splice(sAmericaLength - 2, 2);
				sAmerica_2 = sAmericaTwo.splice(3, 2);
				sAmerica = sAmerica.concat(sAmerica_2);
				utilsWC.shuffle(sAmerica);
				drawnTeams = drawnTeams.concat(sAmerica);
			})();

			//pick 5 African teams. 4 from seed 1. 1 from seed 2  *****2*****
			(function() {
				africa_1 = africaOne.splice(4, 4);
				africa_2 = africaTwo.splice(5, 1);
				africa = africa_1.concat(africa_2);
				utilsWC.shuffle(africa);
				drawnTeams = drawnTeams.concat(africa);


			})();
			//pick 4 Asia teams. 4 from seed 1. 2 from seed 2.   *****5*****
			(function() {
				asia_1 = asiaOne.splice(2, 2);
				asia_2 = asiaTwo.splice(7, 1);
				asia = asia_1.concat(asia_2);
				utilsWC.shuffle(asia);
				drawnTeams = drawnTeams.concat(asia);
				//do not add to draw until mixed with north/cent america round (as per official fifa draw)
			})();

			//pick 2 North /Central America teams. then add to Asia & shuffle    *****3*****
			(function() {
				utilsWC.shuffle(ncAmerica);
				ncAmerica_1 = ncAmerica.splice(2, 2);
				drawnTeams = drawnTeams.concat(ncAmerica_1);
			})();

			//pick Euro teams
			(function() {
				var randNum = utilsWC.randNumber(100);

				//6 from top seeds 2 from lower
				if (randNum <= 40) {
					euro_1 = euroSeedOne.splice(2, 8);
					euro_2 = euroSeedTwo.splice(8, 1);
					euro_3 = euroSeedThree.splice(8, 1);
					euro = euro_1.concat(euro_2, euro_3);
					utilsWC.shuffle(euro);

					//5 from top seeds 3 from lower
				} else if (randNum >= 41 && randNum <= 70) {
					euro_1 = euroSeedOne.splice(3, 7);
					euro_2 = euroSeedTwo.splice(7, 2);
					euro_3 = euroSeedThree.splice(8, 1);
					euro = euro_1.concat(euro_2, euro_3);
					utilsWC.shuffle(euro);
				} else {
					//4 from top seeds 4 from lower
					euro_1 = euroSeedOne.splice(4, 6);
					euro_2 = euroSeedTwo.splice(6, 3);
					euro_3 = euroSeedThree.splice(8, 1);
					euro = euro_1.concat(euro_2, euro_3);
					utilsWC.shuffle(euro);
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

			utilsWC.shuffle(allGroups);

			function draw(group, tablePosition) {

				for (i = 0; i < 4; i++) {
					flagValue = group[i].number;
					jQuery('.myTables').find('td').eq(tablePosition).text(group[i].name).prepend(flagArray.flagsG[flagValue]).addClass("flag");
					tablePosition++;
					drawnTeamsWC.push(group[i]);
				}
			}

			for (x = 0, y = 0; x <= 7; x++, y = y + 4) {
				draw(allGroups[x], y);
			}

			this.allTeams = allTeams;
			utilsWC.sortArrays(drawnTeamsWC);
			this.drawnTeams = drawnTeamsWC;

		
		}
	};

