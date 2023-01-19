import { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MovieList from "./components/MovieList";
import PageHeader from "./components/PageHeader";
import { RootState, store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <PageHeader />
      <MovieList />
    </Provider>
  );
}

export default App;
