import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Switch } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() {

  const URL = "http://localhost:4000/"

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL}/>
        </Route>
        <Route path="/about">
          <About URL={URL}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
