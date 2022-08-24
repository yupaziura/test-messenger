// basic
import data from '../../db/source.js';

// components

// styles
import './ContactPanel.scss';

const ContactPanel = ({index, source}) => {

    const {Image} = source[index];

    return (
        <div className='single_contact'>
            <div className="single_contact__avatar">
                <Image/>
            </div>
            <div className="single_contact__name">
                <h4>{source[index]?.name}</h4>
            </div>
        </div>
    )
}

export default ContactPanel;