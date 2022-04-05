//query first button
let dogButton = document.querySelector("#dog-button");
//access the <img> tag in the html
let dogPic = document.querySelector("img")

//add click event listner

dogButton.addEventListener('click',function(){
    //alert("testing!");
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (httpResponse){
        //console.log(httpResponse.json()); //use .json() to parse your response
        return httpResponse.json();
    })
    .then(function(data){
        dogPic.src = data.message;
    })
});

//weather app 
let weatherButton = document.querySelector("#weather-button");

let weatherInput = document.querySelector('#weather'); //get text input
//add event listener

weatherButton.addEventListener('click',function(){
    let city = weatherInput.value;
    let citySelect = `https://goweather.herokuapp.com/weather/` + city;

    fetch(citySelect)
    .then(function (httpResponse){
        console.log();
        return httpResponse.json();
        
    
    })
    .then(function(data){
        console.log("Parse our data");
        console.log(data);
        console.log(data.message);

        document.getElementById("temp-here").innerHTML = data.temperature;
        document.getElementById("wind-here").innerHTML = data.wind;
        document.getElementById("description-here").innerHTML = data.description;
    })
})  
