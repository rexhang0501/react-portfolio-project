import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ResumePDF from "./components/ResumePDF";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Experience />
          <Skills />
          <Work />
          <Contact />
        </Route>
        <Route exact path="/my-resume">
          <ResumePDF />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
