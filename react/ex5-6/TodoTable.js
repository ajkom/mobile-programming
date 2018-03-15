import React, { Component} from 'react';
import './App.css';

class TodoTable extends Component {
    constructor(props) {
        super(props);
    }  




render() {
    const itemrows = this.props.todos.map((item, index) => 
                    <tr key={index}>
														
                    <td>{item.date}</td>
                    <td> {item.description}</td>
                    <td><button id={index} onClick={ this.props.delete}>Delete</button></td>
				
                </tr>
                )
    
return (
    <div className="App">  
        <table>
            <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                {itemrows}
             </tbody>
        </table>
    </div>          

);

}
}

export default TodoTable;