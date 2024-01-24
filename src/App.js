import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import { setTheme } from "./redux/reducers/themeReducer";

function App() {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleNameInput = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleAgeInput = (e) => {
    dispatch(setAge(parseInt(e.target.value)));
  };

  const handleChangeTheme = () => {
    dispatch(setTheme(theme.status === "light" ? "dark" : "light"));
  };

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos. Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <button onClick={handleChangeTheme}>Switch Theme</button>
    </div>
  );
}

export default App;

//passos para criar o redux -store, provider, reducers / slice , actions / dispatches, selectors
