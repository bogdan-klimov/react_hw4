import '../../App.css';
import faker from 'faker';
import { v4 } from 'uuid';
import React from 'react';
import data from '../utils/data.json'

class List extends React.Component {

    render() {
        return (
            <ul className="List-block">
                {data.map(obj => {
                    const {name} = obj
                    return <li key={v4()}>{name}</li>
                })}
            </ul>
        )
    }
}


class App extends React.Component {
     
    addNameButton() {
        data.push({name: faker.name.findName()})
        console.log(data);
    }

    addNameTop() {
        data.unshift({name: faker.name.findName()})
        console.log(data);
    }

    render() {
        return (
            <div className="App">
                <h1>
                Список случайных имён: 
                </h1>
                <button className="Btn" onClick={this.addNameTop}>Add name top</button>
                <button className="Btn" onClick={this.addNameButton}>Add name button</button>
                <List />
            </div>
        );
    }
}


export default App;
