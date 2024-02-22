import {createBrowserRouter} from 'react-router-dom';
import Root from './Root';
import About from './screens/About';
import About2 from './screens/About2';
import Home from './screens/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
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
        ]
    }
]);

export default router;