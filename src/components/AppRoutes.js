import { Switch, Route } from "react-router-dom";
import Shop from "./Shop";
import AddProduct from "./AddProduct";
import Cart from "./Cart/Cart";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        {/* Navigarion Routing */}
        <Route exact path="/" component={Shop} />
        <Route path="/add" component={AddProduct} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </>
  );
};

export default AppRoutes;
