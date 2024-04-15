import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Tokoyo", "Paris", "London", "New York"];
  const arrays = ["1", "2", "3", "4"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        <b>Notification</b>
      </Alert>
      <ListGroup
        items={cities}
        heading="List of Cities"
        onSelectedItem={handleSelectedItem}
      />
      <ListGroup
        items={arrays}
        heading="List of Arrays"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
