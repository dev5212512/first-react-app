import Alert from "./components/Alert";
import Button from "./components/Button";
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

      <Button onClick={() => console.log("button is clicked")}>
        my custom button
      </Button>
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
