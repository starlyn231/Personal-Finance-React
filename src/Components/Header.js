import React from "react";

function Header({
  categories,
  activeCategory,
  setShowAddCategory,
  setAactiveCategory,
}) {
  return (
    <ul className="navbar navbar-expand flex-row w-100 list-unstyled">
      <li
        className={`font-weight-bold p-3 nav-item ${
          !activeCategory ? "bg-warning" : ""
        }`}
        onclick={() => setAactiveCategory("")}
      >
        All
      </li>
      {categories.map((category, index) => {
        return (
          <li
            className={`p-3 nav-item ${
              activeCategory === category.name ? "bg-warning" : ""
            }`}
            key={index}
            onclick={() => setAactiveCategory(category.name)}
          >
            {category.name}
          </li>
        );
      })}
      <li
        className="font-weight-bold p-3 nav-item bg-info"
        onClick={() => setShowAddCategory(true)}
      >
        +
      </li>
      ;
    </ul>
  );
}

export default Header;
