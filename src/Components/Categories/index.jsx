import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/content")
      .then((response) => {
        const fetchedTopics = response.data.fields.topics;
        setTopics(fetchedTopics);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setError("Konular yüklenirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Konular yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <nav className="hidden md:flex items-center py-10">
      <span
        className="uppercase font-extrabold text-xs leading-4 tracking-wider text-[#22262A]"
        style={{
          width: "57px",
          height: "16px",
          letterSpacing: "2px",
        }}
      >
        TOPICS
      </span>
      <div
        className="h-4 w-px bg-[#E1E6EB]"
        style={{ marginLeft: "23px", marginRight: "24px" }}
      ></div>
      <div className="flex items-center">
        {topics.map((topic, index) => (
          <div key={topic.contentId} className="flex items-center">
            {index > 0 && (
              <div
                className="h-4 w-px bg-[#E1E6EB]"
                style={{
                  marginLeft: index === 1 ? "23px" : "24px",
                  marginRight: "24px",
                }}
              ></div>
            )}
            <a
              href={`/${topic.slug}`}
              className="font-trt font-normal text-xs leading-4 tracking-wide text-[#63676C]"
              style={{
                letterSpacing: "1px",
              }}
            >
              {topic.title}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Categories;
