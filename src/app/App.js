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
            <Switch>
              <Route component={About} path="/" exact />
              <Route component={Portfolio} path="/portfolio" />
              <Route component={Resume} path="/resume" />
            </Switch>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
