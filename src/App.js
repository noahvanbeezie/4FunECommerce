import Nav from './Components/Nav/Nav'
import routes from './routes'
import {withRouter,Redirect} from 'react-router-dom'



function App() {
  return (
    <>
      <Nav/>
      {routes}
    </>
  );
}

export default App;
