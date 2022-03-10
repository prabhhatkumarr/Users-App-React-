//===============================================================================================================================
//                                 Using Function Component
//===============================================================================================================================

import React from "react";
import useFetch from "./useFetch";
import Rows from "./Rows";

function Content() {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

    if (!data) return <div className="row">
        <h1> Pleses wait some time.... </h1> </div>;

    return (
        <div className="Content">
            {data &&
                data.map((item) => (
                    <Rows item = {item}/>
                ))
            }
        </div>
    );
}

export default Content;
