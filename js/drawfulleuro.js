
	//function for drawing all teams based on seed/seedgroup
		function drawfull() {

			this.draw = function () {

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

			/*
			//organise arrays into alphabetical order for select list
			data.allTeams.sort(function(a, b) {
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				return (nameA < nameB) ? -1 : nameA > nameB ? 1 : 0;
			});
			*/



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
	};

