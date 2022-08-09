import React from 'react'

export default function Footer() {
  return (
    <>
    <footer style={{ background: "#121028", height: "auto"}}>
        <div className="container">
          <div className="footer" style={{ padding: "50px 20px" }}>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="footer-logo">
                  <h5>Coming soon...</h5>
                  <div className="footer-logo--premium d-flex flex-row align-items-center">
                    <img src='/images/logo.png' alt='' height={33} width={98} style={{marginRight: "15px"}} />
                    <img src='/images/premium.png' alt='' height={24} />
                  </div>
                </div>
              </div>
              <div className=" col-sm-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <div className="social-logo">
                  <a href="https://www.instagram.com/wepartytruck/" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.facebook.com/WePartyTruck" target="_blank" rel="noopener" ><i className="fab fa-facebook"></i></a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-end">
                  <div className="copyright">
                      <h5>© 2022, Weparty</h5>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
    </>
  )
}
