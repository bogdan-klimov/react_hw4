import React from 'react';

class List extends React.Component {
    render() {
        // console.log(this.props.data);
        return (
            <ul className="List-block">
                {this.props.data.map(el => <li key={el.id}>{el.title}</li>)}
            </ul>
        )
    }
}

export default List;