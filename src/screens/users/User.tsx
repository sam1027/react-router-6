import {useParams} from 'react-router-dom';
import { users } from '../../db';

function User() {
    const {userId} = useParams();
    console.log(userId)
    return (
        <h1>
            User{userId}'s Name is {users[Number(userId) - 1].name}.
        </h1>
    );
}

export default User;