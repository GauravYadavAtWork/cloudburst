import * as React from "react";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Homepage from "./homepage/Homepage";
import AboutPage from "./aboutpage/Aboutpage";
import ContactPage from "./contactpage/Contact";
import MultipleLRegression from "./multipleLinearRegression/MultipleLRegression";
import PolyRegression from "./polynomialregression/PolyRegression";
import Svr from "./SVR/svr";
import RandomForestRegression from "./randomforest/randomforest";
import DecisionTreeRegression from "./decisiontreeRegression/DecisionTRegression";
import Logisticregression from "./logisticregression/logisticregression";
import RandomForestClassifier from "./randomforestclassifier/rfc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path:"/About",
    element:<AboutPage/>
  },
  {
    path:"/Contact",
    element:<ContactPage/>
  },
  {
    path:"/MultipleLinearRegression",
    element:<MultipleLRegression/>
  },
  {
    path:"/PolynomialRegression",
    element:<PolyRegression/>
  },
  {
    path:'/SupportVectorRegression',
    element:<Svr/>
  },
  {
    path:'/RandomForestRegression',
    element:<RandomForestRegression/>
  },
  {
    path:'/DecisionTreeRegression',
    element:<DecisionTreeRegression/>
  },
  {
    path:'/LogisticRegression',
    element:<Logisticregression/>
  },
  {
    path:'/RandomForestClassifier',
    element:<RandomForestClassifier/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
