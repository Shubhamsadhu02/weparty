import React from 'react'
import Header from '../Partials/Header'

export default function ContactUs() {
  return (
    <>
    <div className="contactbg">
        <img src='/images/contactusbg.png' alt=''/>
    </div>
    <Header showNav={false} />
    {/* style={{backgroundImage: "url(/images/contactusbg.png)", backgroundSize: "cover", height: "768px", marginTop: "-125px"}} */}
    <section>
        <div className="container">
            <div className="contact position-relative" style={{height: "750px"}}>
            <div className="row">
                <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                    <div className="home">
                        <div className="party-icon">
                            <img src='/images/partyicon.png' alt='' height={100} width={100}/>
                        </div>
                        <div className="home-head">
                            <h1>Request <br/>a<span style={{color: "#EB4775"}}> Party</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <form>
                    <div className="contactus">
                            <div className="row">
                                <div className="col-lg-12">
                                    <input type="text" placeholder='Full Name' />
                                </div>

                                <div className="col-lg-6 d-flex flex-column">
                                    <input type="tel" placeholder='Mobile' />
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <input type="email" placeholder='Email' />
                                </div>

                                <div className="col-lg-6">
                                    <select id='BestTime'>
                                        <option value="none" selected disabled hidden>Best Time to Contact</option>
                                        <option value={"abc"}>ABC</option>
                                        <option value={"def"}>DEF</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <select id='Occasion'>
                                        <option value="none" selected disabled hidden>Choose an Occasion</option>
                                        <option value={"abc"}>ABC</option>
                                        <option value={"def"}>DEF</option>
                                    </select>
                                </div>

                                <div className="col-lg-6">
                                    <input type="date" placeholder='' />
                                </div>

                                <div className="col-lg-6">
                                    <select id='Participants'>
                                        <option value="none" selected disabled hidden>No. of Participants</option>
                                        <option value={"abc"}>ABC</option>
                                        <option value={"def"}>DEF</option>
                                    </select>
                                </div>

                                <div className="col-lg-12">
                                    <input type="text" placeholder='Have a Coupon Code? (optional)' />
                                </div>

                                <div className="col-lg-12 d-flex flex-column">
                                    <textarea placeholder='Message' />
                                </div>

                                <div className="send-btn mt-4">
                                    <button type='submit'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
