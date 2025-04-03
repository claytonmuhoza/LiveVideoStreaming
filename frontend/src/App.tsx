
import './App.css'
import useKeycloak from './hook/useKeyCloak'

function App() {
  const {authenticated,keycloak} = useKeycloak()
  return (
    <>
      
      <div>
      <h1>Welcome to the Home Page!</h1>
      {authenticated ? (
        <div>
          <p>Hello, {keycloak?.idTokenParsed?.preferred_username}!</p>
        </div>
      ) : (
        <div>
          <p>Please log in to access your personalized content.</p>
          <button onClick={() => keycloak?.login()}>Login</button>
        </div>
      )}
    </div>
    </>
  )
}

export default App
