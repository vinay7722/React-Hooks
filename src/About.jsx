import React from "react";

const About = (props) => {
    return(<>
        <h1>hello,i m {props.name} page</h1>
        {console.log(props.name)}
    </>); 
};

export default About;