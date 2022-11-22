import React, { Component } from 'react'

class Wine extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.description}
                </div>
                <div>
                    {this.props.rating}
                </div>
            </>

        )
    }
}

export default Wine
