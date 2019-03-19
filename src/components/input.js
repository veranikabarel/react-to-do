import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <div>
                <h2>Organize all Your Tasks into one screen.</h2>
                <form>
                    <input type="text" placeholder='e.g. buy some eggs..'/>
                    <button type="submit">
                        +
                    </button>
                </form>
            </div>
        )
    }
}

export default Task;