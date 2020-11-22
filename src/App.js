import './App.css';
import {HashRouter as Router, Route , Switch} from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import contact from './components/contact'

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' component={home} exact />
              <Route path='/about' component={about} />
              <Route path='/contact' component={contact} />
          </Switch>
      </Router>
  );
}

export default App;
