import { useState } from "react";
import "./Main.css";
import Post from "./Post";
import { TextField } from "@material-ui/core";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState({
    title: "",
    text: "",
  });


  const handleSubmit =(e)=>{
e.preventDefault();
setPosts([input,...posts]);
setInput({
  title: "",
  text: "",
})

  }
  return (
    <div className="main">
      <div className="main__input">
        <form action="">
          <div className="main__inputForm">
            {" "}
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              value={input.title}
              // onChange= esta funcion generará un objeto de evento y con este evento loq ue tecleamos lo vamos a incluir en la funcion setInput
              // aqui en setInput vamos a guardar lo que era el input pero vamos a sustituir el objeto por aquello que hayamos escrito
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
            <TextField
              className="main__inputFormText"
              id="outlined-basic"
              label="Enter your post here"
              value={input.text}
              // onChange= esta funcion generará un objeto de evento y con este evento loq ue tecleamos lo vamos a incluir en la funcion setInput
              // aqui en setInput vamos a guardar lo que era el input pero vamos a sustituir el objeto por aquello que hayamos escrito
              onChange={(e) => setInput({ ...input, text: e.target.value })}
              variant="outlined"
            />
          </div>
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
      <div className="main__posts">
       {
         posts.map(({title,text})=> <Post title={title} text={text}/>)
       }
      </div>
    </div>
  );
};

export default Main;
