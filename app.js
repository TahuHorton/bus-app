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

var highbury = newBus("Highbury", highburyStops, "#E7DFC6", highburyTimesMonFri, highburyTimesFriOnly, highburyTimesSat, highburyTimesSun);

var takaro = newBus("Takaro", takaroStops, "#EE2000", takaroTimesMonFri, takaroTimesFriOnly, takaroTimesSat, takaroTimesSun);

var cloverlea = newBus("Cloverlea", cloverleaStops, "#54426B", cloverlaTimesMonFri, cloverleaTimesFriOnly, cloverleaTimesSat, cloverleaTimesSun);

var milson = newBus("Milson", milsonStops, "#B74708",  milsonTimesMonFri, milsonTimesFriOnly, milsonTimesSat, milsonTimesSun);

var rhodes = newBus("Rhodes", rhodesStops, "#550527", rhodesTimesMonFri, rhodesTimesFriOnly, rhodesTimesSat, rhodesTimesSun);

var roslyn = newBus("Roslyn", roslynStops, "93E5AB", roslynTimesMonFri, roslynTimesFriOnly, roslynTimesSat, roslynTimesSun);

var brightwater = newBus("Brightwater", brightwaterStops, "4E878C", brightwaterTimesMonFri, brightwaterTimesFriOnly, brightwaterTimesSat, brightwaaterTimesSun);

var rangiora = newbus("Rangiora", rangioraStops, "F26419", rangioraTimesMonFri, rangioraTimesFriOnly, rangioraTimesSat, rangioraTimesSun);

var fernlea = newBus("Fernlea", fernleaStops, "#878E88", fernleaTimesMonFri, fernleaTimesFriOnly, fernleaTimesSat, fernleaTimesSun);

var heights = newBus("Heights", heightsStops, "#F5FDC6", heightsTimesMonFri, heightsTimesFriOnly, heightsTimesSat, heightsTimesSun);





//Test Objects
awapuni.getStops();


//JQUERY STUFF
$(document).ready(function(){



});
