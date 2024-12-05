import { useState, useEffect } from "react";
import axios from "axios";

export default function DetailsPages() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/content")
      .then((response) => {
        console.log("Article details:", response.data);
        setArticle(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("An error occurred while loading the article details.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="details-page p-4 sm:p-6 md:p-8">
      {article ? (
        <div className="container">
          <h1
            className="text-black font-bold text-4xl md:text-5xl lg:text-6xl leading-[52px] md:leading-[64px] lg:leading-[76px] tracking-tight mb-8"
            style={{
              fontFamily: "Noto Serif, serif",
              fontWeight: 700,
              letterSpacing: "-1px",
              margin: "0",
            }}
          >
            {article.title}
          </h1>
          <img
            src={article.fields.mainImage.url}
            alt={article.fields.mainImage.title}
            className="w-full h-auto rounded-md shadow-md mb-8 lg:w-[984px] lg:h-[612px] lg:gap-4 lg:opacity-100"
            style={{
              margin: "0",
              opacity: 0,
              transition: "opacity 0.5s",
            }}
            onLoad={(e) => (e.target.style.opacity = 1)}
          />
          {article.body.map((block, index) => {
            if (block.blockType === "text") {
              return (
                <div
                  key={index}
                  className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal mb-8"
                  style={{
                    fontFamily: "Noto Serif, serif",
                    margin: "0",
                  }}
                  dangerouslySetInnerHTML={{ __html: block.value }}
                />
              );
            } else if (block.blockType === "youtube") {
              return (
                <div
                  key={index}
                  className="mb-8"
                  style={{
                    margin: "0",
                  }}
                  dangerouslySetInnerHTML={{ __html: block.value }}
                />
              );
            }
            return null;
          })}
          <div className="w-full mb-8">
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal text-left">
              {article.additionalText}
            </p>
          </div>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}
