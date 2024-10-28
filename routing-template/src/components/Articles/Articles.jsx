import React from "react";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Similar to UseState-hook
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");

  const handleSortBy = () => {
    setSearchParams({
      sortBy: "views",
      category: category,
    });
  };

  console.log("Sortby:" + sortBy);
  console.log("category:" + category);

  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy:{sortBy} Category:{category}
        </p>
      </h2>
      <button onClick={handleSortBy}>Sort By Views</button>
    </div>
  );
};

export default Articles;
