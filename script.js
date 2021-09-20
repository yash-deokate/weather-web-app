var cities=["London","New York","Mumbai","Kolkata"];
var button=document.querySelector('.citySub');
var cityIn=document.querySelector('.cityIn ');
window.setInterval(updatetime(),1000);

updateCity();
button.addEventListener('click',function(){
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityIn.value+'&appid=35c9636fb108154795015c16b42014d3')
    .then(response => response.json())
    .then(data => {
        document.getElementById("cityName").innerHTML=data['name'];
        document.getElementById("degree").innerHTML=(data['main']['temp']-273.15).toFixed(1);
        document.getElementById("cloudval").innerHTML=data['clouds']['all']+"%";
        document.getElementById("speedval").innerHTML=(data['wind']['speed']*3.6).toFixed(1)+"Km/h";
        document.getElementById("humidityval").innerHTML=data['main']['humidity']+"%";
        document.getElementById("wtype").innerHTML=data['weather'][0]['main'];
        setIcon(data['weather'][0]['id']);
        console.log(data);
        updatetime();
    })
    .catch(err => alert("Wrong City Name!!"))
})

function updateCity() {
    var ul = document.getElementById("cityList");
    for(var i=0;i<4;i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(cities[i]));
        ul.appendChild(li);
    }
    
  }
//   console.log("hihi");
//     if(!cities.includes(cityIn.value) && cityIn.value!=""){
//         cities.push(cityIn.value);
//         cities.shift();
//     }
function updatetime(){
    var currentdate=new Date();
    document.getElementById("date").innerHTML=currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + (currentdate.getMinutes()<10?'0':'')
    +currentdate.getMinutes();
}

function setIcon(id){
    if(id==200||id==201||id==202||id==210||id==211||id==212||id==221||id==230||id==231||id==232)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/11d.png";
    else if(id==300||id==301||id==302||id==310||id==311||id==312||id==313||id==314||id==321)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/09d.png";       
    else if(id==500||id==501||id==502||id==503||id==504)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/10d.png";
    else if(id==520||id==521||id==522||id==531)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/09d.png";     
    else if(id==511||id==600||id==601||id==602||id==611||id==612||id==613||id==615||id==616||id==620||id==621||id==622)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/13d.png";       
    else if(id==701||id==711||id==721||id==731||id==741||id==751||id==761||id==762||id==771||id==781)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/50d.png";
    else if(id==800)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/01d.png";
    else if(id==801)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/02d.png";
    else if(id==802)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/03d.png";
    else if(id==803 || id==804)
        document.getElementById("wicon").src="http://openweathermap.org/img/wn/04d.png";
}