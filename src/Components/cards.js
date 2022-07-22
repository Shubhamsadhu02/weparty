import React from 'react'

export default function cards() {
  return (
    <>
    <section>
      <div className="container">
        <div className="cards-head text-center mt-15 mb-15">
          <div className="cards-heading">
            <h2>India’s First Gaming & <br/>Entertainment Truck</h2>
          </div>
          <div className="cards-paragrapgh mt-5">
            <p>Delivering kickass Entertainment for all <br/> occasions at your doorstep!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="cards-box">
              <div className="cards-img">
                  <img src='/images/birthdaybox.png' alt="" />
              </div>
              <div className="cards-topic text-center">
                  <p>Birthday Parties</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cards-box">
              <div className="cards-img">
                  <img src='/images/weeding.png' alt="" />
              </div>
              <div className="cards-topic text-center">
                  <p>Wedding Events</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cards-box">
              <div className="cards-img">
                  <img src='/images/corporate.png' alt="" />
              </div>
              <div className="cards-topic text-center">
                  <p>Corporate Team Events</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cards-box">
              <div className="cards-img">
                  <img src='/images/college.png' alt="" />
              </div>
              <div className="cards-topic text-center">
                  <p>College Fests</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cards-box">
              <div className="cards-img">
                  <img src='/images/gamming.png' alt="" />
              </div>
              <div className="cards-topic text-center">
                  <p>Gaming Tournaments</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cards-box">
              <div className="cards-img">
                  <img src='/images/movie.png' alt="" />
              </div>
              <div className="cards-topic text-center">
                  <p>Movie Nights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
