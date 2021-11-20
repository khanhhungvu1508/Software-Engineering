import React from 'react';
import Category from './category';
import MyNavbar from './navbar';
import Banner from './Banner';
import Homepage from './Homepage';
class Controller extends React.Component {
    state = {
        // Navbar

        // Category

        // Content

        // Footer
    }

    render() { 
        return (
            <div>
                <MyNavbar />
                <Banner />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        );
    }
}
 
export default Controller;