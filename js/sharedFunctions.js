

/*
///Team object creator

@params
name - Team Name
seedGroup - Which seed group team belongs to
number - Team number for use within script

@return
object

*/

function team(name, seedGroup, number) {
	this.name = name;
	this.seedGroup = seedGroup;
	this.number = number;
}

 //noTeams = how many teams to pick / teams = name of array / tablePosition = td position in dom 
function draw(noTeams, teams, tablePosition) {
    noTeams = noTeams - 1;
    for (i = 0, x = 0; i <= noTeams; i++, x++) {
        var j = teams[x];
        jQuery('.myTables').find('td').eq(i + tablePosition).text(j.name).prepend(flagArray.flagsG[j.number]).addClass("flag");
        tablePosition = tablePosition + 3;
    };
}

/*
///Generates flag array for use when drawing teams. Flags for display in tables

@params

null

@return
object

*/

function generate_flags() {

	flagArray = [];
	//create image for use in flag constructor.
    createImage = function(src, title) {
        img   = new Image();
        img.src   = src;
        img.alt   = title;
        img.title = title;

        return img; 
    };
        //  push two images to the array
        for (flags=0; flags<=33; flags++) {
            flagArray.push(createImage(template_url + "/images/euroFlags/" + [flags] +".png"));
        }

    this.flagsG = flagArray;
}


function buttons() {

			//reset button function
		this.reset = function () {
			drawfull.draw(); //re-run draw
			jQuery('td').removeClass("red");
			jQuery('td.table').addClass("hide");
			element = 0;
			elementCounter = 0;
			jQuery('select').hide();
			jQuery('#pickTeam').show();
			jQuery("#teamPicked").hide();
			pickedTeams = []; // reset picked teams array as it was causing issues if not
			jQuery("html, body").animate({scrollTop:0}, 300);
		}
}

function utils (max, array) {

/*
///Random Number generator for use within script

@params 
max - Maximum number

@return
rndNumb - the random number generated

*/


	this.randNumber = function (max) {
	rndNumb = Math.floor((Math.random() * max) + 1);
	return rndNumb;
}

    this.shuffle = function (array) {
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


    this.getScreenSize = function (){ 

            screenWidthSize = $(window).width()

            if (screenWidthSize >= 730) {
                screenWidth = true;
            } else {
                screenWidth = false;
            }
            return screenWidth;
        }


        //used for table positions for teams not in draw
    this.randTablePos = function (min, max) {
            rndTabPos = Math.floor((Math.random() * (max - min + 1)) + min);
            return rndTabPos;
        }
}

function displayDraw(seeds) {

    /*
    //Display all teams when button clicked
    */

    this.drawAllTeams = function () {
            jQuery("select").hide();
            jQuery('td').removeClass("hide");
            jQuery('#pickTeam').hide();
            jQuery('#teamPicked').show().html('Draw complete');
            element = 16;
        }

    this.drawIndividual = function () {
            jQuery("select").hide();
            jQuery('#pickTeam').hide();
            jQuery('#teamPicked').show().html('Draw in progress');
            jQuery('td:eq(' + element + ')').removeClass("hide");
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
                    jQuery('#teamPicked').show().html('Draw complete');

                };
                return elementCounter;
        }

        this.displayseed =  function(seeds) {
 
                for (i=0; i<seeds.length; i++) {   
                
                seedTeam = seeds[i];  

                jQuery('.seed_display').find('td').eq(i).text(seedTeam);
            }
        }

}



