import {createBrowserRouter} from 'react-router-dom';
import Error from './components/Error';
import Root from './Root';
import About from './screens/About';
import About2 from './screens/About2';
import Home from './screens/Home';
import NotFound from './screens/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "about",
                element: <About />,
                children: [
                    {
                        path: "about2",
                        element: <About2 />
                    }
                ]
            }
        ],
        errorElement: <NotFound />
    }
]);

export default router;