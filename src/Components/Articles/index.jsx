import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../NewCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/related")
      .then((response) => {
        const fetchedArticles = response.data;
        setArticles(fetchedArticles.slice(0, 2));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError("Makaleler yüklenirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Makaleler yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative flex items-start">
      <div className="flex flex-col gap-6">
        {articles.map((article, index) => (
          <React.Fragment key={index}>
            <NewsCard article={article} />
            {index < articles.length - 1 && (
              <hr className="border-t border-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Articles;
