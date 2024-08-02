
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logout';
function App() {
  const {user,loginWithRedirect } = useAuth0();
  return (
    <div className="App">

      <button onClick={(e) => loginWithRedirect()}>Login with redirect</button>
      <LogoutButton/>
    </div>
    
  );
}

export default App;
