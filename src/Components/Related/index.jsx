import { useState, useEffect } from "react";
import axios from "axios";

const RelatedArticles = () => {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/related")
      .then((response) => {
        const fetchedTitles = response.data
          .slice(-3)
          .map((article) => article.title);

        setTitles(fetchedTitles);
        setLoading(false);
      })
      .catch((err) => {
        setError("İlgili makaleler yüklenirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>İlgili makaleler yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-6 px-8 lg:px-0">
      <h2 className="text-[12px] font-[700] leading-[16px] tracking-[2px] text-[#A0A5AA]">
        Related Stories
      </h2>
      <div className="flex flex-col lg:flex-row">
        {titles.map((title, index) => (
          <div key={index} className="flex items-center">
            <div className="w-[180px] h-[96px]">
              <p className="font-serif font-[700] text-[16px] leading-[24px] text-[#000000]">
                {title}
              </p>
            </div>
            {index < titles.length - 1 && (
              <div className="w-[1px] h-[96px] bg-[#E1E6EB] mx-[48px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
