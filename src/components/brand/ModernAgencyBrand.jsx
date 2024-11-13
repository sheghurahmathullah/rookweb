import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyBrand = () => {
  const BrandRow1 = ["NEXUS", "Finequs", "CEG", "GHBBQ", "moufil", "FF"]
  const BrandRow2 = ["ZOHO", "CM", "VOILA", "DIALECTICA", "KFC", "topmate"]

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_5", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_5");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_5", {
            scrollTrigger: {
              trigger: ".fade_bottom_5",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <div className="client__area-8 sp-x">
      <h6 className="text-end about-sub-right">Our Clients</h6>
      <div className="section_wrapper">
        <h4 className="react_border">
          <span>04</span>
        </h4>
      </div>
      <div className="client__section">
        <h2 className="client__section__title fade_bottom_5">
        Starting   <span>strong,<br />scaling smart <br />let’s drive your </span> <br />
       Growth forward
        </h2>
        <p className="client__section__dis fade_bottom_5 text-justify">
          &quot;It’s easy for businesses to get lost in the noise of the market, especially when marketing doesn’t seem to pay off. But at Rook, we focus on what works for you. We take the time to understand your unique goals and challenges, then craft a personalized strategy that moves you forward. The results we generate aren’t just numbers—they’re proof of what a tailored approach can do for your brand.&quot;
        </p>
      </div>
      {/* <div className="separatorSubtile">
        <h2 className="sec-subtile-6">Our Company</h2>
      </div>
      <div className="client__logo">
        {BrandRow1.map((brand, index) => (
          <Image
            key={index} priority
            width={300} height={200}
            src={`/assets/imgs/rook/home/clients/${brand}.webp`}
            alt={brand}
            className="fade_bottom_5 clientImg"
          />
        ))}
      </div>
      <div className="separatorSubtile">
        <h2 className="sec-subtile-6">Our People</h2>
      </div>
      <div className="client__logo">
        {BrandRow2.map((brand, index) => (
          <Image
            key={index} priority
            width={300} height={200}
            src={`/assets/imgs/rook/home/clients/${brand}.png`}
            alt={brand}
            className="fade_bottom_5 clientImg"
          />
        ))}
      </div> */}
    </div>
  );
};

export default ModernAgencyBrand;
