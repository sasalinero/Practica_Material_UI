import "./App.css";
import Longin from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import {useStateValue} from "./components/StateProvider";

function App() {
  const [{isopen}, dispatch]=useStateValue()
  return (
    <div className="app">
      {/* <Longin/> */}
      <Header />
      <div className={`app__central ${isopen ? "displayed" : ""}`}>
        {" "}
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
