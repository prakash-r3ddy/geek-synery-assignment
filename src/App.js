import {Route, Switch, BrowserRouter} from 'react-router-dom'

import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)
export default App
