// basic
import data from '../../db/source.js';

// components

// styles
import './Message.scss';

const Message = (props) => {

    const bool = true;
    const {Image} = data[0];


    return (
        <>
            <div className={bool? 'message_in' : 'message_out'}>
                <div className="item">
                    <div className="image">
                        {bool? 
                            <Image style={{width: '40px', height: '40px'}}/>
                            :
                            null
                        }
                    </div>
                    <div className="container">
                        <div className="block">
                            lorem
                        </div>
                        <div className="date">
                            <p>21.22.2022 12:40</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={'message_out'}>
                <div className="item">
                    <div className="image">

                    </div>
                    <div className="container">
                        <div className="block">
                            test message
                        </div>
                        <div className="date">
                            <p>21.22.2022 12:40</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Message;