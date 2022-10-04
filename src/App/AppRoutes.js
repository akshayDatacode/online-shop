import { Switch, Route } from "react-router-dom";
import Shop from "../pages/Store/components/Shop";
import AddProduct from "../pages/Store/components/AddProduct";
import Cart from "../pages/Store/components/Cart";
import Orders from "../pages/Store/components/Orders/Orders";
import ProductPage from "../pages/Store/components/Shop/ProductPage";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        {/* Navigarion Routing */}
        <Route exact path="/" component={Shop} />
        <Route path="/add" component={AddProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </>
  );
};

export default AppRoutes;
