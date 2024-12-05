import { useState, useEffect } from "react";
import axios from "axios";

const Popular = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/popular")
      .then((response) => {
        const fetchedArticles = response.data.slice(0, 4);
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError("Popüler makale açıklamaları yüklenirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Popüler makaleler yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  const categories = ["LIFE", "BUSINESS", "MIDDLE EAST", "MIDDLE EAST"];

  return (
    <div className="w-full ">
      <h2 className="text-[16px] font-bold leading-[24px] tracking-[2px] text-[#A0A5AA] uppercase mb-[24px]">
        Popular Today
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-lg shadow-sm md:max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]"
          >
            <div className="text-[#BFC3C9] font-bold text-[48px] leading-[51.36px] pr-4">
              {index + 1}
            </div>
            <div>
              <p className="text-[#0089CC] font-normal text-[12px] leading-[16px] tracking-[1px] mb-[4px]">
                {categories[index]}
              </p>
              <p className="text-[#333] font-normal text-[18px] leading-[28px] line-clamp-4">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
