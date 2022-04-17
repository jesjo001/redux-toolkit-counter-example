import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './store/index' 

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <Fragment>
      <Header /> 
      { !isAuthenticated ? <Auth /> : <UserProfile/> }
      
      <Counter />
    </Fragment>
    
  );
}

export default App;
