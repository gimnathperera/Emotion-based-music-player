import { Scrollbars } from "react-custom-scrollbars-2";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <Scrollbars>
      <Header />
      <div class="relative pt-[100px] lg:pt-[120px] pb-[110px] bg-white">
        <div class="container">
          <Hero />
          <Form />
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Scrollbars>
  );
};

export default App;
