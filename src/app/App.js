import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './nav/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './nav/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route component={Portfolio} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Resume} path="/resume" />
            <Route component={Contact} path="/contact" />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
