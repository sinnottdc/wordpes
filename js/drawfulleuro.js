jQuery(function ($) {
	//function for drawing all teams based on seed/seedgroup
		var drawfull = function drawfull() {

			

			//seed groups
			var seedOne = [france, germany, italy, netherlands, belgium, spain]; // 6 teams 
			var seedTwo = [portugal, greece, croatia, bosnia, england, switzerland, ukraine, russia, denmark, romania, ]; // 10 teams
			var seedThree = [scotland, sweden, serbia, turkey, hungary, czech, slovenia, austria, slovakia, ]; //  9 teams
			var seedFour = [montenegro, norway, finland, poland, ireland, israel, bulgaria, northernIreland, wales]; // 9 teams
			utilities.shuffle(seedOne);
			utilities.shuffle(seedTwo);
			utilities.shuffle(seedThree);
			utilities.shuffle(seedFour);

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
				utilities.shuffle(seedTwo);
				remainingSeedTwo = seedTwo.splice(3, 4) //take 4 teams from seed 2 for round 3 & 4 draw (to avoid top seed picked in later rounds)
				var b = seedTwo.splice(5, 1); // pick 1 team from seed 2 so possibility of 2nd seed team getting in no.1 position.
				var finalTeamsA = b.concat(seedOne); // adding 1 team from seed 2 to seed 1 array
				utilities.shuffle(finalTeamsA); // shuffle the array
				remainingTopSeeds = finalTeamsA.splice(3, 3); // slice 4 teams and put them into position 1 of each group. Return remaining teams
				utilities.shuffle(finalTeamsA); // shuffle array for random positions else seed 2 will always go into group D if picked.
				draw(4, finalTeamsA, 0); //position 1-4 draw}
				drawnTeams = drawnTeams.concat(finalTeamsA);
                s1 = utilities.shuffle(finalTeamsA);
			})();

			//positions 2 for each group - Containing remaining teams from seed 1 all teams from seed 2 & possibly 2 from seed 3
			(function() {
				var b = seedThree.splice(7, 2); //7 Add possible 2 teams from seed 3 top possibly be drawn in round 2 b = 2
				var c = remainingTopSeeds.concat(seedTwo); //remainingTopSeeds = 4 ..seedTwo = 5  c = 9
				roundTwo = b.concat(c); // roundTwo = 11
				utilities.shuffle(roundTwo);
				var a = roundTwo.splice(6, 4);
				draw(4, a, 1);
				drawnTeams = drawnTeams.concat(a);
                s2 = utilities.shuffle(a);
			})();



			(function() {
				remainingSeedThree = seedThree.splice(5, 2)
				b = remainingSeedTwo.concat(seedThree); // 7 + 4
				utilities.shuffle(b);
				var a = seedFour.splice(6, 2);
				seedThreeFinal = a.concat(b);
				utilities.shuffle(seedThreeFinal);
				var c = seedThreeFinal.splice(4, 4);
				draw(4, c, 2);
				drawnTeams = drawnTeams.concat(c);
                s3 = utilities.shuffle(c);
			})();

			(function() {
				a = remainingSeedThree.concat(seedThreeFinal);
				utilities.shuffle(a);
				a = a.splice(3, 4);
				draw(4, a, 3);
				drawnTeams = drawnTeams.concat(a);
                s4 = utilities.shuffle(a);
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
	});
