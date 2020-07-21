import React from 'react';
import { Collapse } from 'antd';
import logo from './logo.svg';
import './App.css';

const { Panel } = Collapse;

function Learn(props) {
    return (
        <Collapse accordion>
            {Array(3)
                .fill('内容')
                .map((item, index) => {
                    if (index === 1) {
                        return (
                            <Panel header={`标题${index}`} key={index}>
                                <Collapse>
                                    {Array(2)
                                        .fill('子内容')
                                        .map((item, index) => {
                                            return (
                                                <Panel
                                                    header={`子标题${index}`}
                                                    key={index + 10}
                                                >
                                                    <p>{`${item}${index}`}</p>
                                                </Panel>
                                            );
                                        })}
                                </Collapse>
                            </Panel>
                        );
                    }
                    return (
                        <Panel header={`标题${index}`} key={index}>
                            <p>{`${item}${index}`}</p>
                        </Panel>
                    );
                })}
        </Collapse>
    );
}

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
    tick = () => {
        this.setState((state, props) => {
            // console.log(state, props);
            return {
                date: new Date(),
            };
        });
    };
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
            <Welcome name="April" />
            {showHeader && <Clock name="clock one: " />}

            <Learn />
        </div>
    );
}

export default App;
