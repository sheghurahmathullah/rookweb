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
                Social media success is like discovering the magic formula for your brand’s growth—once you find it, everything clicks into place.
                </h2>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim text-justify text-center" style={{width:"80%"}}>
                    
                  <p>
                  In the ever-shifting world of social media, knowing where to focus your efforts can feel like navigating a maze. That’s where we come in. We take the guesswork out of the equation, finding the perfect mix of strategies that will propel your brand forward. From crafting a visionary plan to executing with precision, we manage every detail, constantly refining and adapting to keep you ahead of the trends and deeply connected with the right audience.
                  </p>
                </div>
                <div className="sec-btn btn_wrapper">
                  <Link
                    className="wc-btn-pink btn-hover btn-item"
                    style={{border:"2px solid #0096d4"}}
                    href="/about"
                  >
                    <span></span> Book a free   <br />
                    Consultation<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__img-2 pb-130">
          <img
            priority
            width={100}
            style={{ height: "auto" }}
            // src={One}
            src="/assets/imgs/digitalmarketing/smm/smm-banner2.jpg"
            alt="About Image"
            data-speed="0.2"
          />
        </div>
      </section>
    </>
  );
};

export default DesignStudioAbout;
