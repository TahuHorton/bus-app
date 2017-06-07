//CLASS
class Bus {
    busBuilder (name, stops, colour, monFriTimes, friTimes, satTimes, sunTimes){
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;
        this.friTimes = friTimes;
        this.satTimes = satTimes;
        this.sunTimes = sunTimes;
    }
}


//GET STOPS

getStops() {
    console.log("This function will test the bus stops")
    console.log(this.stops)
}

//OBJECTS
var awapuni = newBus("Awapuni", awapuniStops, "#ffef00", awapuniTimesMonFri, awapuniTimesFriOnly, awapuniTimesSat, awapuniTimesSun);

var rugby = newbus("Rugby", rugbyStops, "#228b22", rugbyTimesMonFri, rugbyTimesFriOnly, rugbyTimesSat, rugbyTimesSun);



//Test Objects
awapuni.getStops();


//JQUERY STUFF
$(document).ready(function(){



});
