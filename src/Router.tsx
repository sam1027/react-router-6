import {createBrowserRouter} from 'react-router-dom';
import Error from './components/Error';
import Root from './Root';
import About from './screens/About';
import About2 from './screens/About2';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Followers from './screens/users/Followers';
import User from './screens/users/User';

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
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />
                    }
                ]
            }
        ],
        errorElement: <NotFound />
    }
]);

export default router;