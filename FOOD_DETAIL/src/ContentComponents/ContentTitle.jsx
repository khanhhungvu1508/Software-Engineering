import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css"

class ContentTitle extends React.Component {
    render() { 
        return (
            <div class="content_background_container">
                <div class="content_background_content">{this.props.title}</div>
            </div>
        );
    }
}
 
export default ContentTitle;