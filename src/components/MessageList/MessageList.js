// basic
import data from '../../db/source.js';

// components
import Message from '../Message/Message.js';

// styles
import './MessageList.scss';

const MessageList = (props) => {



    return (
        <div className='message_list'>
            {
                props.index !== null && props.source[props.index]?
                props.source[props.index].messages.map((item, i)=> {
                    return (
                        <div key={i}>
                            <Message type={item.type === 'in'? true : false}  text={item.text} date={item.date} time={item.time}/>
                        </div>
                    )
                })
                :
                'nothing'
            }
        </div>
    )
}

export default MessageList;