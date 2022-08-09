import { React } from 'react'
import Header from '../Partials/Header'
import Cards from './cards'
import Footer from '../Partials/footer'
import { Row, Col, Container } from 'reactstrap'
import {useScroll } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Picture } from 'react-optimized-images'

export default function Home() {
  const scrollToJoinList = () => {
    let ele = document.getElementById('join');
    let position = ele.offsetTop - (window.screen.height/2.5);
    window.scrollTo(0, position); 
  };


  const navigator = useNavigate();
  return (
    <>
      <Header />

      <section className='home'>
        <Container>
          <Row noGutters={true}>
            <Col md={6} sm={12}>
              <div className="home-col">
                <div className="home-head mb-4">
                  <h1>We
                    <div className='animatedText'>
                      <span>
                        <b>Play</b>
                      </span>
                      <span >
                        <b>Celebrate</b>
                      </span>
                      <span>
                        <b>Party</b>
                      </span>
                    </div>
                  </h1>
                </div>
                <div className="head-paragrapgh mb-4">
                  <p>Delivering kickass Entertainment at your doorstep!</p>
                </div>
                <div className="waitlist-btn">
                  <button type="button" onClick={scrollToJoinList}>Join the Waitlist</button>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="home-img">
                <Picture src='/images/homecar.png' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <Cards />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
              <div className="hood-head mb-5">
                <h2>Under the Hood</h2>
              </div>
              <div className="hood-list">
                <ul>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>4 Sony PS4s with multiple controllers </p>
                    </div>
                  </li>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>Rich library of latest games for all ages </p>
                    </div>
                  </li>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>4 Sony PS4s with multiple controllers </p>
                    </div>
                  </li>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>2 Occulus Quest 2 VR headsets </p>
                    </div>
                  </li>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>Climate controlled cabin with surround sound and glow lights</p>
                    </div>
                  </li>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>Board Games, Karaoke and DJ set </p>
                    </div>
                  </li>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>Truck mounted movie screen</p>
                    </div>
                  </li>
                  <li>
                    <div className="hood-tick">
                      <Picture src='/images/tick.png' alt='' />
                    </div>
                    <div className="hood-paragrapgh">
                      <p>Can accomodate up to 16 players</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-5 offset-md-1">
              <div className="hood-img position-relative">
                <Picture src='/images/underhood.png' className='img-responsive h-100' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* style={{ backgroundImage: "url(/images/loginbg.png)", backgroundSize: "cover", height: "510px" }} */}
      <section className='join' id='join'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="join-img">
                <Picture src='/images/birthdayicon.png' alt='' height={76} width={76}></img>
              </div>
              <div className="join-head">
                <h2>Join the Waitlist to <br /> get Early Bird <br />Discounts!</h2>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
              <form name='waitlist' method='post' data-netlify="true">
              <input type="hidden" name="form-name" value="waitlist" />
                <div className="join-form d-flex flex-column justify-content-end">
                  <input type="text" placeholder='Full Name' name='full_name' />
                  <input type="email" placeholder='Email' name='email'/>
                  <input type="tel" placeholder='Mobile Number' name='mobile_number' />
                </div>
                <div className="join-btn d-flex justify-content-end mt-3">
                  <button type='submit'>Join Now</button>
                </div>
              </form>
            </div>
          </div>
          <Picture src="/images/join-confeti.svg" alt="" className='join-confeti' />
        </div>
      </section>

      <section>
        <div className="container mb-15">
          <div className="row">
            <div className=" col-sm-12 col-lg-7">
              <div className="throw-img position-relative">
                <Picture src='/images/girls.png' alt='' />
              </div>
            </div>
            <div className="col-sm-12 col-lg-5 d-flex flex-column justify-content-center">
              <div className="throw-head">
                <h2>Throw a kickass party hassle-free</h2>
              </div>
              <div className="throw-btn mt-5" style={{ position:'relative', zIndez:'10' }}>
                <button type='button' onClick={() => navigator('/contact-us')}>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
