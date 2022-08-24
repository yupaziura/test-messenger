// basic
import { useEffect,useRef } from 'react';

// components
import Message from '../Message/Message.js';

// styles
import './MessageList.scss';

const MessageList = (props) => {

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        
        const {current} = messagesEndRef;
        current.scrollTo(0,current.scrollHeight);      
    }



      useEffect(()=> {
        scrollToBottom()

      }, [props.source])



    return (
        <div className='message_list' ref={messagesEndRef}>
            {
                props.index !== null && props.source[props.index]?
                props.source[props.index].messages.map((item, i)=> {
                    return (
                        <div key={i}>
                            <Message  type={item.type === 'in'? true : false}  text={item.text} date={item.date} time={item.time}/>
                        </div>
                    )
                })
                :
                <div className="start">
                    <p>Select contact to start chat</p>
                </div>
            }
        </div>
    )
}

export default MessageList;