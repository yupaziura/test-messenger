// basic
import data from '../../db/source.js';

// components
import Message from '../Message/Message.js';

// styles
import './MessageList.scss';

const MessageList = (props) => {

    const bool = true;
    const {Image} = data[0];


    return (
        <>
            <Message/>
        </>
    )
}

export default MessageList;