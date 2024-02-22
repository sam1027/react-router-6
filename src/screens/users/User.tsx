import {useParams, Outlet, Link} from 'react-router-dom';
import { users } from '../../db';

function User() {
    const {userId} = useParams();
    console.log(userId)
    return (
        <div>
            <h1>
                User{userId}'s Name is {users[Number(userId) - 1].name}.
            </h1>
            <hr />
            <Link to={"followers"}>Show Followers</Link>
            <Outlet context={{
                userName: users[Number(userId) - 1].name
            }}/>
        </div>
    );
}

export default User;