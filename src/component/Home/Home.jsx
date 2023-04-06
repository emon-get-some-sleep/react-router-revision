import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(typeof tshirts);
    return (
        <div>
            <h2>This is home {tshirts.length}</h2>
        </div>
    );
};

export default Home;