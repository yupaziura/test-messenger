// basic
import data from '../../db/source.js';

// components

// styles
import './Contact.scss';

const Contact = (props) => {


    return (
        <div className='contact'>
            {props.items}
        </div>
    )
}

export default Contact;