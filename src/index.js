import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component
{
    state={lat:null , errorMessage : ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position => this.setState({lat : position.coords.latitude})),
            (positionError => this.setState({errorMessage: positionError.message}))
        );
    }

    render() {
        if(!this.state.lat && this.state.errorMessage)
        {
           return <div>Error : {this.state.errorMessage}</div>
        }
        if(this.state.lat && !this.state.errorMessage)
        {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Loader message={"Please accept location request :) "} />;
    }
}

ReactDOM.render(<App/> , document.querySelector("#root"));