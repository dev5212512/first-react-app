import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Tokoyo", "Paris", "London", "New York"];
  const arrays = ["1", "2", "3", "4"];

  return (
    <div>
      <ListGroup items={cities} heading="List of Cities" />
      <ListGroup items={arrays} heading="List of Arrays" />
    </div>
  );
}

export default App;
