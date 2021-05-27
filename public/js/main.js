let submitButton=document.getElementById("submitButton")
let cityName=document.getElementById("cityName")
let city_name=document.getElementById("city_name")
let temp_val=document.getElementById("temp_val")
let temp_status=document.getElementById("temp_status")

const getInfo=async(e)=>{
    e.preventDefault()
    let newCity=cityName.value
    console.log(newCity)
    if (newCity===""){
        city_name.innerText="enter city name"
    }
    else{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=b4b478c7779eb49f650f36de4665b751&units=metric`
        const response=await fetch(url)
        const data=await response.json()
        const arrData=[data]
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
        temp_val.innerText=arrData[0].main.temp
        temp_status.innerText=arrData[0].weather[0].main

    }
    
    
    
    
}

submitButton.addEventListener("click",getInfo)
