import React from 'react';

const Header = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="jumbotron mt-4 b-shadow">
                        <h1 className="display-4">{ props.title }</h1>
                        <p className="lead">{props.description}</p>
                    </div>
                </div>
            </div>            
        </div>
    )
};

export default Header;