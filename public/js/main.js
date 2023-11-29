const subBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const resposnseTab = document.getElementById("city_name");
const temp_span = document.getElementById("temp_span");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");
const day = document.getElementById("day");
const today_day = document.getElementById("today_day");

const getInfo = async (e) => {
    e.preventDefault();
    if(cityName.value === ""){
        resposnseTab.innerText = "Please enter the city name";
        dataHide.classList.add('data_hide');
    }else{
        try{
            const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&APPID=0303ae07551b37a516d75dc56eeb047d`;
            // console.log(link);
            const resp = await fetch(link);
            const data = await resp.json();
            const arrData = [data];
            resposnseTab.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_span.innerText = arrData[0].main.temp;

            const tempMod = arrData[0].weather[0].main;
            if(tempMod == "Clear"){
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #eccc68;"></i>';
            }else if(tempMod == 'Clouds'){
                temp_status.innerHTML = '<i class="fa fa-cloud" style="color: #f1f2f6;"></i>';
            }else if(tempMod == "Rain"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color: #a4b0be;"></i>';
            }else{
                temp_status.innerHTML = '<i class="fa fa-cloud" style="color: #f1f2f6;"></i>';
            }
            dataHide.classList.remove('data_hide');
            // console.log(arrData);
        }catch{
            resposnseTab.innerText = "Please enter the city name properly";
            dataHide.classList.add('data_hide');
        }
    }

    const getCurrDate = () => {
        var weekday = new Array(7);
        weekday[0] = "SUN";
        weekday[1] = "MON";
        weekday[2] = "TUE";
        weekday[3] = "WED";
        weekday[4] = "THU";
        weekday[5] = "FRI";
        weekday[6] = "SAT";
        let currTime = new Date();
        let day = weekday[currTime.getDay()];

        return day;
    }

    const getCurrTime = () => {
        var months = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            'JUN',
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];
        var now = new Date();
        var month = months[now.getMonth()];
        var date = now.getDate();
        return month + " " + date;
    }
    day.innerHTML = getCurrDate();
    today_day = getCurrTime();

};

subBtn.addEventListener("click", getInfo);