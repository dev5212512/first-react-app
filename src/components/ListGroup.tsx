import { useState } from "react";

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cities = ["Tokoyo", "Paris", "London", "New York"];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>List of Cities</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
