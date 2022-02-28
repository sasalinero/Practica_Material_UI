import "./App.css";
import Longin from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      {/* <Longin/> */}
      <Header />
      <div className="app__central">
        {" "}
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
