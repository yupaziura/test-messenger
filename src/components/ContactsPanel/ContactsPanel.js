// basic
import data from '../../db/source.js';
import { useEffect, useState } from 'react';

// components
import Contact from '../Contact/Contact';

// styles
import './ContactsPanel.scss';

const ContacstPanel = (props) => {

    const [source, setSource] = useState(data);

    useEffect(()=> {
        setSource(
            props.search?
            source.filter((item, i)=> {
                return item.name.includes(props.search)
            })
            : data
        )
    }, [props.search])
    

    const items = source.map(({name,messages, Image}, i) => {
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
        <div className='contsct_panel'>
            <Contact items={items}/>
        </div>
    )
}

export default ContacstPanel;