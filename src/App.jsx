import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import routes from './router';
import { Provider } from 'react-redux'
import store from '@/stores/store.js'

const router = createBrowserRouter(routes);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App;
