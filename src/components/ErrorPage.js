import React from 'react'
import errorPage from '../img/errorpage.jpg'
export default function ErrorPage() {
  return (
    <>
      <div className="container-fluid Main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            <div className="col-md-12 col-12 Main_header_left align-items-center">
              <figure className="errorimg">
                 <img src={errorPage} alt="Me" className="img-fluid" srcSet=""/>
              </figure>
              <p>Welcome to Pushpesh World🌍</p>
              <h1 className="message">Oooops Page not found!!!!</h1>
              <a href="/"><button>Go back</button></a>
            </div>
            
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
