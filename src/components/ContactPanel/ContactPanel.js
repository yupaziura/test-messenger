// basic
import data from '../../db/source.js';

// components

// styles
import './ContactPanel.scss';

const ContactPanel = ({index, source}) => {

    const {image} = source[index];

    return (
        <div className='single_contact'>
            <div className="single_contact__avatar">
                <img src={image} alt="" style={{width: '40px', height: '40px'}}/>
            </div>
            <div className="single_contact__name">
                <h4>{source[index]?.name}</h4>
            </div>
        </div>
    )
}

export default ContactPanel;