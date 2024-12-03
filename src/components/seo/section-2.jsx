import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
// import One from "../../../public/assets/imgs/about/2/1.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DesignStudioAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.to(".about__img-2 img", {
          scale: 1.15,
          duration: 1,
          scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
          },
        });
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="about__area-2">
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  SEO success is like decoding a secret map—follow the right
                  steps, and you’ll hit the jackpot.
                </h2>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim text-justify">
                  <p>
                    <strong>The SEO landscape is constantly evolving, offering huge
                    potential—but how do you know where to focus your efforts?</strong> <br /> 
                    That’s where we come in. We identify the key data points that matter, manage your SEO strategy, and handle the technical details. Our experts create a data-driven plan, then continuously optimize to boost your rankings and traffic.
                  </p>
                </div>
                <div className="sec-btn btn_wrapper">
                  <Link
                    className="wc-btn-pink btn-hover btn-item"
                    style={{border:"2px solid #0096d4"}}
                    href="/about"
                  >
                    <span></span> Get   <br />
                    Started<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__img-2 pb-130">
          <img
            priority
            width={1720}
            style={{ height: "auto" }}
            // src={One}
            src="/assets/imgs/digitalmarketing/seo/seo-banner.jpeg"
            alt="About Image"
            data-speed="0.2"
          />
        </div>
      </section>
    </>
  );
};

export default DesignStudioAbout;
