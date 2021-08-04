import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Course from './pages/courses/Course';
import CourseTaken from './pages/courses/CourseTaken';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/register" render={() => <Register />} />
            <Route exact path="/home" render={() => <Home/>} />
            <Route exact path="/courses" render={() => <Course/>} />
            <Route exact path="/courses-taken" render={() => <CourseTaken/>} />
        </Switch>
    </Router>
);
}

export default App;
