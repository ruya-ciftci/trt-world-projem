import { useState, useEffect } from "react";
import axios from "axios";

const MainNews = () => {
  const [mainNews, setMainNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/content")
      .then((response) => {
        setMainNews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ana haber verisi yüklenirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-start max-w-[664px] w-full">
      {mainNews ? (
        <a href="/DetaySayfası">
          <img
            src={mainNews.fields.mainImage.url}
            alt={mainNews.fields.mainImage.title}
            className="w-full h-auto rounded-md shadow-md mb-16"
            style={{
              width: "664px",
              height: "373px",
            }}
          />
          <h1 className="text-[42px] font-bold leading-[52px] text-black tracking-tight mb-8 px-8 lg:px-0">
            {mainNews.title}
          </h1>
        </a>
      ) : (
        <p>Veri bulunamadı.</p>
      )}
    </div>
  );
};

export default MainNews;
