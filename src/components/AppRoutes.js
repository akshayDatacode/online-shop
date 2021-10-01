import { Switch, Route } from "react-router-dom";
import Shop from "./Shop";
import AddProduct from "./AddProduct";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        {/* Navigarion Routing */}
        <Route exact path="/" component={Shop} />
        <Route path="/add" component={AddProduct} />
      </Switch>
    </>
  );
};

export default AppRoutes;
