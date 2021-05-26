import React, { Component } from 'react';
import AdminBody from './AdminBody';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

class Admin extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <AdminBody />
                <Footer />
            </div>
        )
    }
}

export default Admin
