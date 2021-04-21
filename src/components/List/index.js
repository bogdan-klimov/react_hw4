import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul className="List-block">
                {this.props.data.map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
        )
    }
}

export default List;