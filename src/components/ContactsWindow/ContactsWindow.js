// basic

// components

// styles
import './ContactsWindow.scss';


const ContactsWindow = (props) => {

    return (
        <div className='contacts_window'>
            {props.children}
        </div>
    )
}

export default ContactsWindow;