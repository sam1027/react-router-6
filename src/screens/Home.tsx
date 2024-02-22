import { users } from "../db";
import {Link} from 'react-router-dom';

function Home() {
    // const users: any = [];
    // return <h1>{users[0].name}</h1>;
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