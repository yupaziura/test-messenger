// basic
import data from '../../db/source.js';

// components

// styles
import './Message.scss';

const Message = (props) => {

    const {Image} = data[0];


    return (
        <>
            <div className={props.type? 'message_in' : 'message_out'}>
                <div className="item">
                    <div className="image">
                        {props.type?
                            <Image style={{width: '40px', height: '40px'}}/>
                            :
                            null
                        }
                    </div>
                    <div className="container">
                        <div className="block">
                            {props.text}
                        </div>
                        <div className="date">
                            <p>{props.date} {props.time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message;