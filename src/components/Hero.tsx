import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles } from "./design/Header";
import { heroIcons } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BottomLine, Gradient } from "./design/Hero";
import { useState } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [mouse, setMouse] = useState<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useGSAP(() => {
    gsap.to(".hero_scroll_effect", {
      y: 100,
      scrollTrigger: {
        trigger: ".hero_scroll_effect",
        start: "top 75%",
        scrub: 2.5,
      },
    });
  }, []);

  useGSAP(() => {
    gsap.to(".hero_circles", {
      x: (mouse.x - window.innerWidth / 2) * 0.1,
      y: (mouse.y - window.innerHeight / 2) * 0.1,
    });
  }, [mouse.x, mouse.y]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <Section
      id="hero"
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      onMouseMove={handleMouseMove}
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:md-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI <br className="hidden md:block" />{" "}
            Chatting with{" "}
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-m-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI whithin Brainwave. Upgrade your productivity
            with Brainwave, then open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex hero_scroll_effect">
                  {heroIcons.map((icon, i) => (
                    <li className="p-5" key={i}>
                      <img src={icon} alt="icon" />
                    </li>
                  ))}
                </ul>

                <Notification
                  className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] lg:flex hero_scroll_effect"
                  title="Code generation"
                />
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>
        <BackgroundCircles className="hero_circles" />

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
