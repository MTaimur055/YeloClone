import React from "react";
import TopMenue from "./Components/topmenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/home";
import Contact from "./Components/contact";

import NotFound from "./Components/Notfound";

import Login from "./Components/users/login";
import Register from "./Components/users/register";
import { ToastContainer } from "react-toastify";
import Analytics from "./Components/Analytics";
import Customers from "./Components/customers";

import OrderData from "./Components/ordersdata";
import Lastmonth from "./Components/lastmonth";
import ResetPassword from "./Components/users/reset";
import Newpassword from "./Components/users/newpassord";
import index from "./Components/DashboardView/index";
import CustomerListView from "./Components/Restaurants/index1";
import { Grid } from "@material-ui/core";
import StickyFooter from "./Components/footer";
import Homeextention from "./Components/maincharts";
import Products from "./Components/Products";
import PromoCodes from "./Components/PromoCodes";
import Discounts from "./Components/Discounts";
import Refferals from "./Components/Referrals";

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
      <div style={{ paddingLeft: "177px"}}>
      <ToastContainer />
      
      
      
      <TopMenue />
      
      <Home />

     
      <Switch>
=======
        <div style={{ paddingLeft: "195px" }}>
          <ToastContainer />
          <TopMenue />
>>>>>>> 5508a7309c7c6b6856764e117878f1ea18d4018e

          <Home />

          <Switch>
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/reset" exact component={ResetPassword} />
            <Route path="/reset/:token" exact component={Newpassword} />
            <Route path="/Home1" component={index} />
            <Route path="/Analytics" component={Analytics} />
            <Route path="/customers" component={Customers} />
            <Route path="/ordersdata" component={OrderData} />
            <Route path="/lastmonth" component={Lastmonth} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/products" component={Products} />
            <Route path="/index1" component={CustomerListView} />
            <Route path="/promos" component={PromoCodes} />
            <Route path="/discounts" component={Discounts} />
            <Route path="/refferals" component={Refferals} />
            <Route path="/" exact component={Homeextention} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
          <StickyFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
