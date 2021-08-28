import React, { Component } from 'react';

class CampsiteInfo extends Component {
    render() {
        if(this.campsite) {
            return (
                <div className="row"></div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    };
}

export default CampsiteInfo;
