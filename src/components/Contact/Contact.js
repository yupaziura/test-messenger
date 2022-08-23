// basic
import data from '../../db/source.js';

// components

// styles
import './Contact.scss';

const Contact = (props) => {

    const items = data.map(({name,messages, Image}, i) => {
        return (
            <div className='contact__item' key={i}>
                <div className="contact__img">
                    <Image />
                </div>
                <div className="contact__data">
                    <div className="contact__name">
                        <p className='' >{name}</p>
                    </div>
                    <div className="contact__message">
                        <p className='' >{
                            messages[messages.length - 1].text
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
        <div className='contact'>
            {items}
        </div>
    )
}

export default Contact;