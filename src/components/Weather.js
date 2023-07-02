import { React, useState } from "react";

export default function Weather(props) {
  const [text, setText] = useState("Enter Your City Name");
  const [cityName, setCityName] = useState("City Name");
  const [temp, setTemp] = useState("");
  const [tempStatus, setTempStatus] = useState("");
  document.title = "Weather App-Weather"
  const enterText = (e) => {
    setText(e.target.value);
  };
  const getInfo = async (event) => {
    event.preventDefault();
    if(text==="" ) {
      setCityName("Please enter a city name");
      document.getElementById("tempInfo").style.visibility = "hidden";
    } else {
      document.getElementById("tempInfo").style.visibility = "visible";
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${props.apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        setCityName(`${arrData[0].name} | ${arrData[0].sys.country}`);
        setTempStatus(`${arrData[0].weather[0].main}`);
        setTemp(`${arrData[0].main.temp}`);

        //Condition for temperature status....
        const temMod = arrData[0].weather[0].main;
        if (temMod === "Clear") {
          setTempStatus(
            <i className="fas fa-sun" style={{ color: "#eccc68" }}></i>
          );
        } else if (temMod === "Clouds") {
          setTempStatus(
            <i className="fas fa-cloud" style={{ color: "#f1f2f6" }}></i>
          );
        } else if (temMod === "Rain") {
          setTempStatus(
            <i className="fas fa-rain" style={{ color: "#a40be" }}></i>
          );
        } else {
          setTempStatus(
            <i className="fas fa-sun" style={{ color: "#eccc68" }}></i>
          );
        }
      } catch (error) {
        setCityName("City Not Found");
        document.getElementById("tempInfo").style.visibility = "hidden";
      }
    }
  };

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dev",
  ];
  const showDate = new Date();
  let day = week[showDate.getDay()];
  let todayDate = showDate.getDate();
  let currentMonth = months[showDate.getMonth()];

  return (
    <>
      <div className="container-fluid Main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="main_content">
              <form className="form">
                <input
                  type="text"
                  id="cityName"
                  onChange={enterText}
                  placeholder={text}
                />
                <button className="btn" onClick={getInfo}>
                  Search
                </button>
              </form>
            </div>
            <div className="weatherInfo">
              <div className="top_layer">
                <p id="day">{day}</p>
                <p id="today_date">
                  {todayDate} {currentMonth}
                </p>
              </div>
              <div className="main_layer">
                <p id="city_name">{cityName}</p>
              </div>
              <div className="middle_layer" id="tempInfo">
                <p id="temp">{temp ? `${temp} °C` : " "}</p>
                <p id="temp_status">{tempStatus} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
