function Forecast(){
  this.weathers = [];
}

Forecast.prototype.addWeather = function(weather) {
  this.weathers.push(weather);
}

Forecast.prototype.checkClass = function(){
  for(var i = 0; i < this.weathers.length; i++) {
    if(this.weathers[i]){
      if(this.weathers[i].condition.toLowerCase() === "snow"){
        this.weathers[i].classToday = "Class Cancelled"
      }
    }
  };
  return false;
}

function Weather(temp, condition, classToday){
  this.temp = temp,
  this.condition = condition,
  this.classToday = classToday
}

var wholeForecast = new Forecast();
var conditions = ["Rain", "Snow", "Sunny", "Cloudy"];
var day1 = new Weather(Math.floor(Math.random() * (8 - (-5) + 1)) + (-5), "Snow","Not Cancelled");
var day2 = new Weather(Math.floor(Math.random() * (8 - (-5) + 1)) + (-5), conditions[Math.floor(Math.random() * conditions.length)],"Class Not Cancelled");
var day3 = new Weather(Math.floor(Math.random() * (8 - (-5) + 1)) + (-5), conditions[Math.floor(Math.random() * conditions.length)],"Class Not Cancelled");
var day4 = new Weather(Math.floor(Math.random() * (8 - (-5) + 1)) + (-5), conditions[Math.floor(Math.random() * conditions.length)],"Class Not Cancelled");
var day5 = new Weather(Math.floor(Math.random() * (8 - (-5) + 1)) + (-5), conditions[Math.floor(Math.random() * conditions.length)],"Class Not Cancelled");
wholeForecast.addWeather(day1);
wholeForecast.addWeather(day2);
wholeForecast.addWeather(day3);
wholeForecast.addWeather(day4);
wholeForecast.addWeather(day5);

//User Interface
$(document).ready(function(){
wholeForecast.checkClass();
$("#weather1").html(day1.temp + "&#176;C" + "<br>" + day1.condition);
$("#weather2").html(day2.temp + "&#176;C" + "<br>" + day2.condition);
$("#weather3").html(day3.temp + "&#176;C" + "<br>" + day3.condition);
$("#weather4").html(day4.temp + "&#176;C" + "<br>" + day4.condition);
$("#weather5").html(day5.temp + "&#176;C" + "<br>" + day5.condition);
$("#classStatus1").text(day1.classToday);
$("#classStatus2").text(day2.classToday);
$("#classStatus3").text(day3.classToday);
$("#classStatus4").text(day4.classToday);
$("#classStatus5").text(day5.classToday);

  $("#btnStart").click(function(){
    $("#intro").hide();
    $("#forecast").show();
  });

  $("button#checkClassStatus").click(function(){
    $("#classStatus1").toggle();
    $("#classStatus2").toggle();
    $("#classStatus3").toggle();
    $("#classStatus4").toggle();
    $("#classStatus5").toggle();
  });

  $("button#goBack").click(function(){
    location.reload();
  });
});
