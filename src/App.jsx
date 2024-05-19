import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import { Provider } from "react-redux";
import store from "@/stores/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(routes);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </Provider>
    );
}

export default App;
