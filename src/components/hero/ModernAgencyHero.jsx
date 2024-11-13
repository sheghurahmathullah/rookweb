import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/plugins";
import Shape23 from "../../../public/assets/imgs/rook/home/rook-logo.svg";
import ScrollDown from "../../../public/assets/imgs/essential-img/scrolldown.svg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import { formModalContext } from "@/pages/_app";
import { useContext } from "react";


gsap.registerPlugin(ScrollTrigger);

const ModernAgencyHero = () => {
  const { setShowModal } = useContext(formModalContext);
  const charAnim = useRef();
  const charAnim2 = useRef();
  const heroTextAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
    if (typeof window !== "undefined") {
      let hero__text_animation = heroTextAnim.current;
      let tHero = gsap.context(() => {
        let split_text_animation = new SplitText(hero__text_animation, {
          type: "chars words",
        });
        gsap.from(
          split_text_animation.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
        let imageTl_8 = gsap.timeline({
          scrollTrigger: {
            trigger: ".portfolio__big",
            start: "top top+=90",
            pin: true,
            markers: false,
            scrub: 1,
            pinSpacing: false,
            end: "bottom bottom+=150",
          },
        });
        imageTl_8.to(".portfolio__big-inner", {
          width: "100%",
        });
      });
      return () => tHero.revert();
    }
  }, []);

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
      <section className="hero__area-4 sp-x">
        <div className="hero__content-8">
          <h2
            className="sec-title-4 sec-title-5 animation__char_come"
            ref={charAnim}
          >
            Empower{" "}
            <Image
              priority
              width={114}
              style={{ height: "auto" }}
              src={Shape23}
              alt="shape"
            />
          </h2>
          <h2 className="sec-title-4 animation__char_come" ref={charAnim2}>
            Your Business <span>Digitally</span>
          </h2>
          <div className="scroll-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={ScrollDown}
                alt="Scroll Down"
              />
            </div>
            
            <div className="btn_wrapper btn_centered">
              <button
                onClick={openTicket}
                className="wc-btn-primary btn-hover btn-item"
              >
                <span></span>Start Your <br /> Journey{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            
            
          </div>
        </div>
      </section>
      
    </>
  );
};

export default ModernAgencyHero;



