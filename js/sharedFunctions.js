/*
///Random Number generator for use within script

@params 
max - Maximum number

@return
rndNumb - the random number generated

*/

function randNumber(max) {
	rndNumb = Math.floor((Math.random() * max) + 1);
	return rndNumb;
}

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