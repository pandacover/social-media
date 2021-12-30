import { Navbar, Form } from './components';
import { Index, Login, Register, Home } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={Home} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
        </Switch>
        <Switch>
          <Route path="/users/form" component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
