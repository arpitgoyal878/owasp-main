import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "translateY(0)" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </div>
    </section>
  );
}
var requestOptions = {
  method: "GET",
};

var query_params = {
  q: "Cyber security",
  lang: "en",
  apikey: "3b4daf8d9ff0e2df9c8ce52ab2211357",
};

var esc = encodeURIComponent;
var query = Object.keys(query_params)
  .map(function (k) {
    return esc(k) + "=" + esc(query_params[k]);
  })
  .join("&");

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const handleFetchNewsData = async () => {
      const response = await fetch(
        "https://gnews.io/api/v4/search?" + query,
        requestOptions
      );
      const data = await response.json();
      const articles = data.articles.map((article) => {
        const { title, description, source, url, content } = article;

        return { title, description, source, url, content };
      });
      console.log(articles);
      setNewsData(articles);
    };
    handleFetchNewsData();
  }, []);
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === "/"
          ? "news-container w-full h-auto flex justify-center items-end py-6 pt-10"
          : "news-container w-full h-screen flex justify-center items-end py-6 pt-10"
      }
    >
      <div
        className={
          location.pathname === "/"
            ? "h-[95%] w-[95%] glass-morph p-6 scroll-bar"
            : "h-[95%] w-[95%] glass-morph p-6 overflow-y-scroll scroll-bar"
        }
      >
        {newsData &&
          newsData.map((item) => {
            return (
              <Section>
                <div className="news border-b-[1px] border-white py-2 mb-4 text-white">
                  <div className="text-sm italic text-red-500">
                    {item.title}
                  </div>
                  <h2 className="text-sm font-semibold">{item.description}</h2>
                  <div className="flex gap-2">
                    <p className=" whitespace-nowrap text-sm w-full overflow-hidden">
                      {item.content}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-red-500 whitespace-nowrap italic"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </Section>
            );
          })}
      </div>
    </div>
  );
};

export default News;
