import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-[calc(100svh-59.95px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
