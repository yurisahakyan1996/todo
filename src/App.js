import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path={"/"} element={<Home/>}/>
        <Route path={"/todo/:id"} element={<Todo/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
