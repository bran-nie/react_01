import React from "react";
import logo from "./logo.svg";
import "./App.css";

function AppHeader(props) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}

function Welcome(props) {
    const { name } = props;
    return <h1>Hello, {name}</h1>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), interval: 0 };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState((state, props) => {
            // console.log(state, props);
            return {
                date: new Date(),
            };
        });
    }
    render() {
        return (
            <div>
                {this.props?.name} It is {this.state.date.toLocaleTimeString()}.
            </div>
        );
    }
}

const showHeader = false;

function App() {
    return (
        <div className="App">
            {showHeader && <AppHeader />}
            <Welcome name="Bran" />
            <Welcome name="David" />
            <Clock />
            <Clock name="clock2" />
        </div>
    );
}

export default App;
