import { Switch, Route } from "react-router-dom";
import Shop from "./Store/Shop";
import AddProduct from "./Store/AddProduct";
import Cart from "./Store/Cart/Cart";
import Orders from "./Store/Orders/Orders";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        {/* Navigarion Routing */}
        <Route exact path="/" component={Shop} />
        <Route path="/add" component={AddProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </>
  );
};

export default AppRoutes;
