import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onSelectedItem(items[index]);
  };
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
