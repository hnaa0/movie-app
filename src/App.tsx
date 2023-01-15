import { BrowserRouter } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import PageHeader from "./components/PageHeader";
import PageRouter from "./PageRouter";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <PageRouter />
    </BrowserRouter>
  );
}

export default App;
