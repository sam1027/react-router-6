import {useOutletContext} from 'react-router-dom';

interface IFollowers{
    userName: string;
}

function Followers() {
    const {userName} = useOutletContext<IFollowers>();
    console.log(userName)
    return (
        <h1>{userName}'s Followers</h1>
    );
}

export default Followers;