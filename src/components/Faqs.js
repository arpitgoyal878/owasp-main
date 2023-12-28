import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import QueryData from "../data/QueryData";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "translateX(0)" : "translateX(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const Faqs = () => {
  const [element, setElement] = useState({
    elem: 0,
    show: false,
  });

  return (
    <div className=" faqs-page lg:h-[calc(100vh-160.8px)] min-h-screen pt-20 bg-gradient-to-tr pb-5 from-blue-600 to-black">
      <div className=" h-[95%] w-[95%] m-auto lg:grid lg:grid-cols-2 flex flex-col lg:gap-10 gap-6 p-6 glass-morph">
        <div className="relative flex h-72 lg:h-full w-full items-center justify-start p-6 lg:p-10">
          <img
            className="absolute -z-10 inset-0 w-full h-full lg:object-cover object-cover  rounded-lg"
            src="https://www.duhacks.tech/assets/images/faq_boy.png"
            alt=""
          />
        </div>
        <div className="queries h-full overflow-y-scroll scroll-bar">
          {QueryData.map((data, index) => {
            return (
              <Section>
                <div
                  className="query w-full border-b-[1px] my-4 py-2 cursor-pointer border-white text-white"
                  onClick={(e) =>
                    setElement((prev) => {
                      return {
                        ...prev,
                        elem: index + 1,
                        show: !prev.show,
                      };
                    })
                  }
                >
                  <div className="w-full flex font-semibold text-sm items-center justify-between py-4">
                    <p>{data.query}</p>
                    <i
                      className={
                        element.elem === index + 1 && element.show
                          ? "rotate-180 transition-all duration-500"
                          : "rotate-0 transition-all duration-500"
                      }
                    >
                      <GoChevronDown />
                    </i>
                  </div>
                  <p
                    className={
                      element.elem === index + 1 && element.show
                        ? "text-sm max-h-48 overflow-hidden transition-all duration-500 italic"
                        : "max-h-0 overflow-hidden transition-all duration-500 text-sm italic"
                    }
                  >
                    {data.answer}
                  </p>
                </div>
              </Section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
