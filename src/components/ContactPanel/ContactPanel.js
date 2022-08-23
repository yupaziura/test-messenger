// basic
import data from '../../db/source.js';

// components

// styles
import './ContactPanel.scss';

const ContactPanel = (props) => {

    const {Image} = data[0];

    return (
        <div className='single_contact'>
            <div className="single_contact__avatar">
                <Image/>
            </div>
            <div className="single_contact__name">
                <h4>{data[0].name}</h4>
            </div>
        </div>
    )
}

export default ContactPanel;