import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/header";
import About from "./pages/about";
import MyHomePage from "./pages/home";
import Todo from "./pages/todo";
import TodoList from "./components/todolist";



export function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path = "/" element ={<MyHomePage/>}/>
      <Route path = "/About" element ={<About/>}/>
      <Route path = "/todo" element ={<TodoList/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}
