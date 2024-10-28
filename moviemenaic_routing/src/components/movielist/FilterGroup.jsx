import React from "react";

const FilterGroup = ({ minRating, onRatingClick, ratingList }) => {
  return (
    <ul className="align_center movie_filter">
      {ratingList.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => onRatingClick(rate)}
          key={rate}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
