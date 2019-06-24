//import to create component
import React,{Component} from 'react';

class BookList extends Component{
    render(){
        return(
            <div>
                <ul id="book-list">
                    <li>
                        Book Name 1
                    </li>
                    <li>
                        Book Name 2
                    </li>
                    <li>
                        Book Name 2
                    </li>
                </ul>
            </div>
        )
    }
}
//export to access from other files
export default BookList;