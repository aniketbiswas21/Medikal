import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import About from "../pages/About";
import Services from "../pages/Services";
import Doctors from "../pages/Doctors";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Landing from "../pages/Landing";
import FormContainer from "../pages/FormContainer";
import BlogDetail from "../pages/BlogDetail";
import addBlog from "../pages/addBlog";
import DoctorHome from "../pages/DoctorHome";
import PatientDetails from "../pages/PatientDetails";
import Hospital from "../pages/Hospital";
import DoctorCreateSchedule from "../pages/DoctorCreateSchedule";
import PatientHome from "../pages/PatientHome";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/doctors" component={Doctors} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={BlogDetail} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/login" component={FormContainer} />
        <Route exact path="/register" component={FormContainer} />
        <Route exact path="/doctor/home" component={DoctorHome} />
        <Route exact path="/addBlog" component={addBlog} />
        <Route exact path="/patient/details" component={PatientDetails} />
        <Route exact path="/hospital" component={Hospital} />
        <Route
          exact
          path="/doctor/create-schedule"
          component={DoctorCreateSchedule}
        />
        <Route exact path="/patient/home" component={PatientHome} />
      </Switch>
    </div>
  );
};
export default Routes;
