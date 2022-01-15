import React from "react";
import {useParams} from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const User = () => {
    const {fname,lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    return(
        <>
            <h1>hello I m {fname} + {lname}</h1>
            <h1>My Current location is {location.pathname} + {lname}</h1>
            {location.pathname === `/user/vinay/chauhan` ? 
                <button onClick={() => history.goBack()}>click me</button> : null
            }
        </>
    );
}

export default User;