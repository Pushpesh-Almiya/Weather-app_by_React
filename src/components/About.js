import React from 'react'
import background from "../img/background.jpg"
export default function About() {
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
            <div class="col-md-5 col-12 Main_header_right align-items-center">
              <figure class="aboutimg">
                 <img src={background} alt="it's me" class="img-fluid" srcset=""/>
              </figure>
             </div>
            <div class="col-md-7 col-12 Main_header_left">
              <p>Welcome to weather app</p>
              <h1>I am a <span>mern stack developer</span> and freelancer</h1>
              <a href="https://instagram.com/pummy2k02?igshid=MzNlNGNkZWQ4Mg==" target="_pummy"><button>Instagram Account</button></a>
             <div>
              
              </div> 
            </div>
            
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
