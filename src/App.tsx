import { Provider } from "react-redux";
import MovieList from "./components/MovieList";
import PageHeader from "./components/PageHeader";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <PageHeader />
      <MovieList />
    </Provider>
  );
}

export default App;
