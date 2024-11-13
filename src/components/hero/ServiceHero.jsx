import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Solution2 from "../../../public/assets/imgs/rook/digital-marketing/img6.webp";
import Solution from "../../../public/assets/imgs/rook/digital-marketing/img7.webp";
import Solution3 from "../../../public/assets/imgs/rook/digital-marketing/img.webp";
import Icon1 from "../../../public/assets/imgs/icon/1.webp";
import Icon2 from "../../../public/assets/imgs/icon/2.webp";
import Icon3 from "../../../public/assets/imgs/icon/3.webp";
import Icon4 from "../../../public/assets/imgs/icon/4.webp";
import Icon5 from "../../../public/assets/imgs/icon/5.webp";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceHero = () => {
  const charAnim = useRef();
  const solutionArea = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let image_list = [".solution__wrapper img"];
      imageMoving(image_list);
    }
    animationCharCome(charAnim.current);
  }, []);

  function imageMoving(image_list) {
    let container = solutionArea.current;
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {
          var x = e.clientX;
          var y = e.clientY;
          let viewportWidth = window.innerWidth;
          let center = viewportWidth / 2;
          let centerHeight = innerHeight / 2;

          let tHero = gsap.context(() => {
            if (x > center) {
              gsap.to(image_list, {
                x: 15,
                duration: 5,
                ease: "power4.out",
              });
            } else {
              gsap.to(image_list, {
                x: -15,
                duration: 5,
                ease: "power4.out",
              });
            }
            if (y > centerHeight) {
              gsap.to(image_list, {
                y: 15,
                duration: 5,
                ease: "power4.out",
              });
            } else {
              gsap.to(image_list, {
                y: -15,
                duration: 5,
                ease: "power4.out",
              });
            }
          });
          return () => tHero.revert();
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className="solution__area" ref={solutionArea}>
        <div className="container hero-line"></div>
        <div className="solution__wrapper">
          <div className="solution__left">
            <div className="solution__img-1">
              <Image
                priority
                width={435}
                style={{ height: "auto" }}
                src={Solution}
                alt="Solution Image"
              />
            </div>
            <div className="solution__img-2">
              <Image
                priority
                width={220}
                style={{ height: "auto" }}
                src={Solution2}
                alt="Solution Image"
              />
            </div>
          </div>

          <div className="solution__mid">
            <h1 className="solution__title animation__char_come" ref={charAnim}>
              Creative Digital Marketing
            </h1>
            <p>
              Making a meaningful impression through thoughtful digital marketing strategies
            </p>
          </div>

          <div className="solution__right">
            <div className="solution__img-3">
              <Image
                priority
                width={459}
                style={{ height: "auto" }}
                src={Solution3}
                alt="Solution Image"
              />
            </div>
          </div>
        </div>

        <div className="container pb-130">
          <div className="row">
            <div className="col-xxl-12">
              <div className="solution__btm">
                <ul>
                  <li>Approch</li>
                  <li>Creativity</li>
                  <li>Experienced</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="solution__shape">
          <Image
            priority
            width={41}
            style={{ height: "auto" }}
            src={Icon1}
            alt="Shape Image"
            className="shape-1"
          />
          <Image
            priority
            width={22}
            style={{ height: "auto" }}
            src={Icon2}
            alt="Shape Image"
            className="shape-2"
          />
          <Image
            priority
            width={38}
            style={{ height: "auto" }}
            src={Icon3}
            alt="Shape Image"
            className="shape-3"
          />
          <Image
            priority
            width={62}
            style={{ height: "auto" }}
            src={Icon4}
            alt="Shape Image"
            className="shape-4"
          />
          <Image
            priority
            width={94}
            style={{ height: "auto" }}
            src={Icon5}
            alt="Shape Image"
            className="shape-5"
          />
        </div>
      </section>
    </>
  );
};

export default ServiceHero;
