import React from 'react';
import faker from 'faker';
import { v4 } from 'uuid';
import List from '../List';
import './App.css';

class App extends React.Component {

    state = {
        data: []
    }

    constructor (props) {
        super(props);
        this.addNameBottom = this.addNameBottom.bind(this);
        this.addNameTop = this.addNameTop.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount!');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json())
            .then(data => this.setState({ data }))
    }
     
    addNameBottom() {
        this.setState({
            data: [
                ...this.state.data,
                {
                    id: v4(),
                    title: faker.name.findName()
                }
            ]
        })
    }

    addNameTop() {
        this.setState({
            data: [
                {
                    id: v4(),
                    title: faker.name.findName()
                },
                ...this.state.data
            ]
        })
    }

    render() {
        console.log('render App!');
        return (
            <div className="App">
                <h1>Список случайных имён: </h1>
                <button className="Btn" onClick={this.addNameTop}>Add name top</button>
                <button className="Btn" onClick={this.addNameBottom}>Add name button</button>
                <List data={this.state.data}/>
            </div>
        );
    }
}


export default App;
