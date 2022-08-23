// basic

// components

// styles
import './MessagesWindow.scss';

const MessagesWindow = (props) => {

    return (
        <div className='messages_window'>
            {props.children}
        </div>
    )
}

export default MessagesWindow;