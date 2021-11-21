import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css"

const category = {
    com: "Món cơm",
    trangmieng: "Món tráng miệng",
    pho: "Món phở",
    mi: "Món mì",
    xoi: "Món xôi",
}

class ContentTitle extends React.Component {
    getBackground(title) {
        if (category.mi === title) {
            return 'url("http://nunforest.com/koad-demo/upload/menu/pasta-ban@2x.jpg")';
        }
        if (category.pho === title) {
            return 'url("http://nunforest.com/koad-demo/upload/menu/pizza-ban@2x.jpg")';
        }
        if (category.com === title) {
            return 'url("http://nunforest.com/koad-demo/upload/menu/pizza-ban@2x.jpg")';
        }
        if (category.xoi === title) {
            return 'url("http://nunforest.com/koad-demo/upload/menu/burger-ban@2x.jpg")';
        }
        else {
            return 'url("http://nunforest.com/koad-demo/upload/menu/desert-ban@2x.jpg")';
        }
    }

    render() { 
        return (
            <div 
                className="content_background_container"
                // style={{
                //     position:"relative",
                //     background: this.getBackground(this.props.title),
                //     backgroundPosition: 'center',
                //     backgroundSize: 'cover',
                //     height: "200px",
                //     width: "100%"
                // }
            >
                <div className="content_background_content">{this.props.title}</div>
            </div>
        );
    }
}
 
export default ContentTitle;