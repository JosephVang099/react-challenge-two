import React from "react";

class BasicInfo extends React.Component {
    render() {
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>Number: {this.props.number}</p>
                <p>Date of Birth: {this.props.dateOfBirth}</p>
            </div>
        );
    }
}

export default BasicInfo;
