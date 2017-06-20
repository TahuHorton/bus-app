//CLASS
class Bus {
    constructor (name, stops, colour, monFriTimes, friTimes, satTimes, sunTimes){
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;
        this.friTimes = friTimes;
        this.satTimes = satTimes;
        this.sunTimes = sunTimes;
        this.nameDOM = document.getElementById("name");
        this.stopsDOM = document.getElementById("stops");
        this.monFriTimesDOM = document.getElementById("monFriTimes");
        this.friTimesDOM = document.getElementById("friTimes");
        this.satTimesDOM = document.getElementById("satTimes");
        this.sunTimesDOM = document.getElementById("sunTimes");
    }

      addContent(){
        this.nameDOM.innerHTML = this.name;
        this.stopsDOM.innerHTML = this.formatStops();
        this.monFriTimesDOM.innerHTML = this.monFriTimes;
        this.friTimesDOM.innerHTML = this.friTimes;
        this.satTimesDOM.innerHTML = this.satTimes;
        this.sunTimesDOM.innerHTML = this.sunTimes;

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


//DOM
function addContent(name, stops, colour, monFriTimes, friTimes, satTimes, sunTimes) {
    nameDOM.innterHTML = name;
}


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
