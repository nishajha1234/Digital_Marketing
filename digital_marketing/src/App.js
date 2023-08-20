import Home from "../src/components/home";
import About from "../src/components/about";
import Services from "../src/components/services";
import Portfolio from "../src/components/portfolio";
import Contact from "../src/components/contact";
import Site_map from "./components/site_map";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>  
          <Route path="/site_map" element={<Site_map/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
