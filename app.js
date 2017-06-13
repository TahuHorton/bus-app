//CLASS
class Bus {
    constructor (name, stops, colour, monFriTimes, friTimes, satTimes, sunTimes){
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;
        this.friTimes = friTimes;
        this.satTimes = satTimes;
        this.sunTimes = sunTimes;
    }

    //GET STOPS
    getStops() {
        console.log("This function will test the bus stops")
        console.log(this.stops)
    }

}

//OBJECTS
var awapuni = new Bus("Awapuni", awapuniStops, "#ffef00", awapuniTimesMonFri, awapuniTimesFriOnly, awapuniTimesSat, awapuniTimesSun);

var rugby = new Bus("Rugby", rugbyStops, "#228b22", rugbyTimesMonFri, rugbyTimesFriOnly, rugbyTimesSat, rugbyTimesSun);

var highbury = new Bus("Highbury", highburyStops, "#E7DFC6", highburyTimesMonFri, highburyTimesFriOnly, highburyTimesSat, highburyTimesSun);

var takaro = new Bus("Takaro", takaroStops, "#EE2000", takaroTimesMonFri, takaroTimesFriOnly, takaroTimesSat, takaroTimesSun);

var cloverlea = new Bus("Cloverlea", cloverleaStops, "#54426B", cloverlaTimesMonFri, cloverleaTimesFriOnly, cloverleaTimesSat, cloverleaTimesSun);

var milson = new Bus("Milson", milsonStops, "#B74708",  milsonTimesMonFri, milsonTimesFriOnly, milsonTimesSat, milsonTimesSun);

var rhodes = new Bus("Rhodes", rhodesStops, "#550527", rhodesTimesMonFri, rhodesTimesFriOnly, rhodesTimesSat, rhodesTimesSun);

var roslyn = new Bus("Roslyn", roslynStops, "93E5AB", roslynTimesMonFri, roslynTimesFriOnly, roslynTimesSat, roslynTimesSun);

var brightwater = new Bus("Brightwater", brightwaterStops, "4E878C", brightwaterTimesMonFri, brightwaterTimesFriOnly, brightwaterTimesSat, brightwaaterTimesSun);

var rangiora = new Bus("Rangiora", rangioraStops, "F26419", rangioraTimesMonFri, rangioraTimesFriOnly, rangioraTimesSat, rangioraTimesSun);

var fernlea = new Bus("Fernlea", fernleaStops, "#878E88", fernleaTimesMonFri, fernleaTimesFriOnly, fernleaTimesSat, fernleaTimesSun);

var heights = new Bus("Heights", heightsStops, "#F5FDC6", heightsTimesMonFri, heightsTimesFriOnly, heightsTimesSat, heightsTimesSun);





//Test Objects
awapuni.getStops();


document.getElementById("awapuniStops").innerHTML = awapuni.stops
document.getElementById("highburyStops").innerHTML = highbury.stops
document.getElementById("cloverleaStops").innerHTML = cloverlea.stops
document.getElementById("rhodesStops").innerHTML = rhodes.stops
document.getElementById("rangioraStops").innerHTML = rangiora.stops
document.getElementById("fernleaStops").innerHTML = fernlea.stops


//JQUERY STUFF
//$(document).ready(function(){
//    $(".bus").click(function(){
//        console.log(this.id)
//        $("#"+this.id+"Stops").html ( eval(this.id).getstops() );
//        $("#"+this.id+"Stops").slideToggle();
//});
////LOOPING ALL BUS OBJECTS TO INSERT RELATED STOPS
//    for(var i = 0; i < buses.length; i++) {
//        document.getElementById(eval(buses[i])+"Stops").innerHtml = eval(buses[i]).getStops()
//    }


});
