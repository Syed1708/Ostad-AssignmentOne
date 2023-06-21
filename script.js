let weather = {
    'apikeay' : 'bb07c9c3f2e44ac0216f367d49a2c34b',
   
    fetchWhather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikeay

        ).then((response) =>response.json())
        .then(data => this.displayWeather(data))
    },

    displayWeather: function(data){

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
       // console.log(name,icon,description,temp,humidity,speed);

        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity :" + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed " + speed + "KM/H";

        // remove the calss loading
        //document.querySelector(".weather").classList.remove("loading");
        
    },

    search: function (){
        this.fetchWhather(document.querySelector(".search-input").value);
    }

};


document.querySelector(".search button").addEventListener("click", function(){

    weather.search();
})


document.querySelector(".search-input").addEventListener("keyup", function(event){
    //if event key is enter
    //then
    if(event.key == "Enter"){
        weather.search();
    }
    
})

// when page will load
//default weather will show Dhaka

weather.fetchWhather('Dhaka');