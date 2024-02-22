import { users } from "../db";
import {Link, useSearchParams} from 'react-router-dom';

function Home() {
    // const users: any = [];
    // return <h1>{users[0].name}</h1>;

    const [readSearchParams, setSearchParams] = useSearchParams();
    console.log(readSearchParams)
    console.log(readSearchParams.has("age"))
    console.log(readSearchParams.get("age"))

    // setTimeout(() => {
    //     setSearchParams({
    //         name: "yse",
    //         age: "30",
    //     })
    // }, 3000);

    return (
        <div>
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                        <Link to={`users/${user.id}`}>{user.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Home;