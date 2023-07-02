import React from 'react'
import bg1 from '../img/bg1.jpg'
import bg2 from '../img/bg2.jpg'
import bg3 from '../img/bg3.jpeg'
import bg4 from '../img/bg4.jpg'
import {Link} from 'react-router-dom'
export default function Home() {
  document.title = "Weather App-Home"
  return (
    <>
      <div class="container-fluid main_menu">
      <div class="row">
        <div class="col-md-10 col-12 mx-auto">
        </div>
      </div>
    </div>
    <div class="container-fluid Main_header">
      <div class="row">
        <div class="col-md-10 col-12 mx-auto">
          <div class="row">
            <div class="col-md-6 col-12 Main_header_left">
              <p>Welcome to weather app</p>
              <h1>Get the latest <span>weather</span> Report of your town</h1>
              <Link to="/weather"><button>Check Now</button></Link>
            </div>
            <div class="col-md-6 col-12 Main_header_right">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={bg1} class="d-block w-100" alt="Sunny"/>
                  </div>
                  <div class="carousel-item">
                    <img src={bg2} class="d-block w-100" alt="Cloudy"/>
                  </div>
                  <div class="carousel-item">
                    <img src={bg3} class="d-block w-100" alt="Rainy"/>
                  </div>
                  <div class="carousel-item">
                    <img src={bg4} class="d-block w-100" alt="Snow Fall"/>
                  </div>
                </div>
               <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
