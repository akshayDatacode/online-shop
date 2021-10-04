import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
