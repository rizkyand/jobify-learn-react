import React from 'react';
import {Link} from 'react-router-dom';


function Error() {
    const err = 'It seems like the page you are looking for is not Found, Sorry!';
    return (
        <div>
            <h1>Error Pages</h1>
            <p>{err}</p>
            <Link to="/">Back To Home</Link>
        </div>
    );
}

export default Error;