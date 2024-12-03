import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import HeroShape from "../../../public/assets/imgs/hero/4/hero-shape.webp";
import HeroShape3 from "../../../public/assets/imgs/hero/4/hero-shape-3.webp";

import Link from "next/link.js";

import Image from "next/image.js";

const StartupAgencyHero = () => {
  const heroTitle = useRef();
  const heroText = useRef();
  const heroAnchor = useRef();
  const heroImg = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(heroImg.current, {
          opacity: 0,
          y: 50,
        });
        gsap.set(heroAnchor.current, {
          opacity: 0,
          y: 50,
        });

        let split_hero6_title = new SplitText(heroTitle.current, {
          type: "chars",
        });
        let split_hero6_desc = new SplitText(heroText.current, {
          type: "chars words",
        });

        gsap.from(split_hero6_title.chars, {
            duration: 0.2, // Minimal duration for very quick animations
            x: 20, // Reduced distance to make the animation appear smoother and faster
            autoAlpha: 0,
            stagger: 0.01, // Minimal stagger for rapid character transitions
          });
          gsap.from(
            split_hero6_desc.words,
            {
              duration: 0.2, // Reduced duration for quick transitions
              x: 15, // Lowered distance for a snappier effect
              autoAlpha: 0,
              stagger: 0.008, // Very low stagger for fast word transitions
            },
            "-=0.2" // Adjust overlap for minimal sequencing
          );
        gsap.to(
          heroAnchor.current,
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1.5"
        );
        gsap.to(
          heroImg.current,
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__area-6 pb-130 ">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__content-6 hero__six_anim">
              
                <h1 className="hero__title-6 " ref={heroTitle} style={{fontSize: "clamp(30px, 8vw, 100px)"}}>
                SEO{" "}
                </h1>
                <p ref={heroText} style={{fontSize:"20px"}}> 
               <strong>Surpass every ranking goal and watch <br />your growth take flight like a skyrocket.</strong> <br />
              
                </p>
                <Link
                  className="btn-started btn-hover"
                  href="/contact"
                  ref={heroAnchor}
                >
                  Get my SEO report now
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 text-justify heroPadding">
  <div className="hero__right-6">
    <p ref={heroText}>
      <strong></strong> <br />
      We will optimize your website with precision, targeting the right keywords, content, technical improvements to drive organic traffic. By conducting thorough audits, optimizing on-page SEO, and building authoritative backlinks, our SEO specialists will improve your search engine rankings, increase visibility, and ultimately maximize your ROI.
    </p>
  </div>
  <style jsx>{`
    .heroPadding {
      padding-top: 185px;
      transition: '0.1s ease-in-out'
    }
    @media (max-width: 768px) {
      .heroPadding {
        padding-top: 10px;
      }
    }
  `}</style>
</div>
          </div>
        </div>
        <Image
          priority
          width={80}
          height={158}
          className="hero__shape"
          src={HeroShape}
          alt="Shape Image"
        />

        <Image
          priority
           width={38}
          height={49}
          className="hero__shape-3"
          src={HeroShape3}
          alt="Shape Image"
        />
      </section>
    </>
  );
};

export default StartupAgencyHero;
