import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './nav/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './nav/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
            <Header />
              <Switch>
                <Route component={Portfolio} path="/" exact />
                <Route component={About} path="/about" />
                <Route component={Resume} path="/resume" />
                <Route component={Contact} path="/contact" />
              </Switch>
            <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
