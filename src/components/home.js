import React, { useEffect, useState } from 'react'
import Header from './header';
import Menu from './menu';
import Body from './body';
import Footer from './footer';

function Home() {
    const [category, setCategory] = useState();
    const categoryChange = (param) => {
        setCategory(param);
    }

    return (
        <div>
            <Header />
            <Menu onChange={categoryChange} />
            <Body category={category} />
            <Footer />
        </div>
    )
}

export default Home