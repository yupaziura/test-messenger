// basic

// components
import Contact from '../Contact/Contact';

// styles
import './ContactsPanel.scss';

const ContacstPanel = (props) => {



    

    const items = props.source.map(({name,messages, Image}, i) => {
        return (
            <div className='contact__item' key={i} onClick={()=>{props.setIndex(i)}}>
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
        <div className='contsct_panel'>
            <Contact items={items}/>
        </div>
    )
}

export default ContacstPanel;