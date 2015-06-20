/*
///Random Number generator for use within script

@params 
max - Maximum number

@return
rndNumb - the random number generated

*/



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


function buttons(drawfull) {

			//reset button function
		this.reset = function reset(drawfull) {
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
}

function utilities (max, array) {

	this.randNumber = function randNumber(max) {
	rndNumb = Math.floor((Math.random() * max) + 1);
	return rndNumb;
}

    this.shuffle = function shuffle(array) {
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

}




