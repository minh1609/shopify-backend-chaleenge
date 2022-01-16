import React from "react";
import axios from "axios";

const Home = () => {
    let fetchItem = () => async () => {
        const res = await axios.get("/api/test");
        console.log(res);
    };

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Home;
