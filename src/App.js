import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieAdd from "./components/MovieAdd";
import MovieSearch from "./components/MovieSearch";
import MovieDelete from "./components/MovieDelete";
import MovieView from "./components/MovieView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MovieAdd />}></Route>
        <Route path="search" element={<MovieSearch />}></Route>
        <Route path="delete" element={<MovieDelete />}></Route>
        <Route path="view" element={<MovieView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
