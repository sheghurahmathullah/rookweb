import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/thumb/footer.webp";
import FooterLogoWhite from "../../../public/assets/imgs/rook/home/Rook-white.png";
import Image from "next/image";
import { formModalContext } from "@/pages/_app";
import { useContext } from "react";


export default function Footer3(
  { customThumbFooter }
) {
  const { setShowModal } = useContext(formModalContext);
  const openTicket = () => {

    if (document) {
      // get the button with the id zohohc-asap-web-launcherbox
      const chatButton = document.getElementById('zohohc-asap-web-launcherbox');
  
      // click the chat button
      chatButton.click();
    }
    
  }
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          {/* <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={customThumbFooter ?? ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          /> */}
          {/* <div style={{
                width: 1160,
                height: 662,
                // backgroundImage: "radial-gradient(#0c0c0c 3.5px, transparent 3.5px), radial-gradient(#0c0c0c 3.5px, transparent 3.5px)",
                // backgroundSize: "27px 27px",
                // backgroundPosition: "0 0, 13.5px 13.5px",
                backgroundColor: "#fff"
              }}>  */}
          {/* </div> */}
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{ width: "auto", height: 40 }}
                      className="footer__logo"
                      src={FooterLogoWhite}
                      alt="Footer Logo"
                    />
                    <p style={{ textAlign: "justify", width: "100%" }}>
                      Rook Fellows offers expert digital marketing services, skillfully enhancing
                      social media, SEO, and cutting-edge technology to propel businesses forward in the dynamic and competitive digital realm.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="https://linkedin.com/company/rf">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/rookfellows">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com/rookfellows">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@rkfw">
                          <span>
                            <i className="fa-brands fa-youtube"></i>
                          </span>
                        </a>
                      </li>

                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">We Grow Together</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="https://rookhq.com">Rook</Link>
                      </li>
                      <li>
                        <Link href="https://rookhq.com/about">Who We Are?</Link>
                      </li>
                      <li>
                        <Link href="https://rookhq.com/happenings">Happenings</Link>
                      </li>
                      <li>
                        <Link href="https://resource.rookfellows.com/">Resources</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact Us</h2>
                    <ul className="footer__contact">
                      <li>No.248, Kuberan Nagar 11th Street Extn, Chennai, India - 600091.</li>
                      <li>
                        <a href="tel:07092700022" className="phone">
                          (+91) 709 270 0022{" "}
                        </a>
                      </li>
                      <li>
                        <a href="mailto:fellows@rookhq.com">
                          fellows@rookhq.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Empower Your Business!
                    </h2>
                    <div className="btn_wrapper">
                      <button
                        onClick={openTicket}
                        
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Start Your <br /> Journey{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                    <h3 className="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                    <h4 className="contact-day">Monday - Saturday</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © All Rights Reserved 2020 - {new Date().getFullYear()}{" "}
                      <a href="https://rookhq.com/" target="_blank">
                        Rook Ecom Private Limited
                      </a>
                    </p>
                    <p>
                    Disclaimer: All logos and trademarks belong to their respective owners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
