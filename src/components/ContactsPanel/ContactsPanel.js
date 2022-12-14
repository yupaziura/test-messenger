// basic

// components
import Contact from '../Contact/Contact';

// styles
import './ContactsPanel.scss';

const ContacstPanel = (props) => {


    const clickContact = (i) => {
        props.setIndex(i);
        props.setSubSource(props.source)
    }
    

    const items = props.source.map(({name,messages, image, status}, i) => {
        return (
            <div className='contact__item' key={i} onClick={()=>{clickContact(i)}}>
                <div className="contact__img">
                    <img src={image} alt="" style={{width: '40px', height: '40px'}}/>
                    {status === true? 
                        <img src={require('../../img/check-circle.png')} alt="" className='circle_exsmall' />
                    : null  
                    }
                </div>
                <div className="contact__data">
                    <div className="contact__name">
                        <p className='' >{name}</p>
                    </div>
                    <div className="contact__message">
                        <p className='' >{
                            messages[messages.length - 1].text.length >50? messages[messages.length - 1].text.slice(0, 50)+'...' : messages[messages.length - 1].text
                        }</p>
                    </div>
                </div>
                <div className="contact__date">
                    <p>{messages[messages.length - 1].date}</p>
                </div>
            </div>
        )
    })


    return (
        <div className='contsct_panel'>
            <div className="chat_text">
                <h2>Chats</h2>
            </div>
            <Contact items={items}/>
        </div>
    )
}

export default ContacstPanel;