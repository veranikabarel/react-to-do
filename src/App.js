import React, {Component} from 'react';
import Task from './components/input';
import img from './list.png'
import Credits from './components/credits';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row header'><Task/></div>

                <div className='row'>
                    <div className='col left-col img'><img src={img} alt={"list"}/></div>
                    <div className='col right-col'></div>
                </div>

                <div className='row'><Credits/></div>
            </div>
        );
    }
}

export default App;
