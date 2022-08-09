import React from 'react'
import Header from '../Partials/Header'

export default function ContactUs() {
    return (
        <>
            <div className="contactbg">
                <img src='/images/contactusbg.png' style={{ height: 100 + 'vh' }} alt='' />
            </div>
            <Header showNav={false} />
            {/* style={{backgroundImage: "url(/images/contactusbg.png)", backgroundSize: "cover", height: "768px", marginTop: "-125px"}} */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact position-relative">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                                <div className="home1">
                                    <div className="party-icon">
                                        <img src='/images/partyicon.png' alt='' height={100} width={100} />
                                    </div>
                                    <div className="home-head1">
                                        <h1>Request a<span style={{ color: "#EB4775" }}> Party</span></h1>
                                    </div>
                                    <div className="contact-details">
                                        <div className="contact-details--row">
                                            <div className="contact-details--image">
                                                <img src="images/email-icon.svg" alt="" />
                                            </div>
                                            <div className="contact-details--content">
                                                <a href="mailto:wepartytruck@gmail.com">wepartytruck@gmail.com</a>
                                            </div>
                                       </div>
                                        <div className="contact-details--row">
                                            <div className="contact-details--image">
                                                <img src="images/call-icon.svg" alt="" />
                                            </div>
                                            <div className="contact-details--content">
                                                <a href="tel:7019257642">7019257642</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <form name="contact" netlify>
                                    <div className="contactus">
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-12">
                                                <input type="text" placeholder='Full Name' name="full-name" />
                                            </div>

                                            <div className="col-sm-12 col-lg-6">
                                                <input type="tel" placeholder='Mobile' name="mobile" />
                                            </div>
                                            <div className="col-sm-12 col-lg-6">
                                                <input type="email" placeholder='Email' name="email" />
                                            </div>

                                            <div className="col-sm-12 col-lg-6">
                                                <select id='BestTime' name="best-time">
                                                    <option value="none" selected disabled>Best Time to Contact</option>
                                                    <option value={"06 AM - 12 PM"}>06 AM - 12 PM</option>
                                                    <option value={"12 AM - 06 PM"}>12 AM - 06 PM</option>
                                                    <option value={"06 PM - 12 PM"}>06 PM - 12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-lg-6">
                                                <select id='Occasion' name="ocassion">
                                                    <option value="none" selected disabled>Choose an Occasion</option>
                                                    <option value={"Birthday parties"}>Birthday parties</option>
                                                    <option value={"Wedding Events"}>Wedding Events</option>
                                                    <option value={"Corporate Team Events"}>Corporate Team Events</option>
                                                    <option value={"College Fests"}>College Fests</option>
                                                    <option value={"Gaming Tournament"}>Gaming Tournament</option>
                                                    <option value={"Movie Nights"}>Movie Nights</option>

                                                </select>
                                            </div>

                                            <div className="col-sm-12 col-lg-6">
                                                <input type="date" placeholder='' name="date" />
                                            </div>

                                            <div className="col-sm-12 col-lg-6">
                                                <input type="text" id='Participants' placeholder='No. of Participants'
                                                    name="participants"
                                                />
                                            </div>

                                            <div className="col-sm-12 col-lg-12">
                                                <input type="text" placeholder='Have a Coupon Code? (optional)' name='coupon' />
                                            </div>

                                            <div className="col-sm-12 col-lg-12">
                                                <textarea placeholder='Message' name="message" />
                                            </div>

                                            <div className="col-sm-12 send-btn mt-4">
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
