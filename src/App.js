import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () =>  {
  return (
    <div>
      <h1>React with Redux Toolkit</h1>
      <hr />
      <ChangeColor />
      <Login />
      <Profile />
    </div>
  );
}

export default App;
