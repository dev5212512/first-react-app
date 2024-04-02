function ListGroup() {
  const cities = ["Tokoyo", "Paris", "London", "New York"];
  return (
    <>
      <h1>List of Cities</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
