import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="h-screen">
      <h1 className="font-semibold text-4xl text-center my-8">
        ADMIN JOINING FORM
      </h1>
      <hr style={{height: "1px", width: "100%", backgroundColor: "black", border: "none"}}/>
      <div className="my-6">
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
