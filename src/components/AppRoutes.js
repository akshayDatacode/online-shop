import { Switch, Route } from "react-router-dom";
import Shop from "./Shop";
import AddProduct from "./AddProduct";
import Cart from "./Cart/Cart";
import Orders from "./Orders/Orders";

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
