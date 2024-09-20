import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="h-screen">
      <div className="bg-secondary">
        <h1 className="font-semibold text-4xl text-center text-white p-8">
          ADMIN JOINING FORM
        </h1>
        {/* <hr
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "black",
            border: "none",
          }}
        /> */}
      </div>
      <div className="bg-primary">
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
