import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return <div className="App">
    <Router>
      <div className="navbar">
        <Link to="/"> Home Page </Link>
        <Link to="/createpost"> Create A Post </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route
          exact path="/createpost"
          component={CreatePost}
          element={<CreatePost/>}
        />
        <Route
          exact path="/post/:id"
          component={Post}
          element={<Post/>}
        />
      </Routes>
    </Router>
  </div>;
}

export default App;
