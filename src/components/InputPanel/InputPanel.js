// basic
import { useState, useEffect } from 'react';

// components

// styles
import './InputPanel.scss';

const InputPanel = (props) => {

    const [message, setMessage] = useState('');

    const fullDate = new Date();
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1 <10 ?  '0'+(fullDate.getMonth() + 1) : fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();

    const hour = fullDate.getHours();
    const minutes = fullDate.getMinutes() <10? '0'+fullDate.getMinutes() : fullDate.getMinutes();

    const formatedDate = `${day}.${month}.${year}`;
    const formatedTime = `${hour}:${minutes}`;

    const moveUp = (array, index) => {
        if (index < 1 || index >= array.length) {
            return props.source
        }
    
        return array.sort((x,y)=>{ return x.name === props.source[props.index].name ? -1 : y.name === props.source[props.index].name ? 1 : 0; });
    }


    const test = ['1', '2', '3']



    const sendMessage = (e) => {
        e.preventDefault();

        props.source.map((obj, i)=> {
            if (i === props.index) {
                obj.messages = [...obj.messages, {type:'out', date:formatedDate, time:formatedTime, text: message}]
                
            }
            // props.setSource(moveUp([...props.source], props.index))
            props.setSource([...props.source])

        })

        setMessage('')

    };


    return (
        <div className='input_panel' >
            <input value={message} onChange={(e)=>{setMessage(e.target.value)}} type="text" placeholder='Type your message' />
            <button onClick={(e)=>sendMessage(e)} className='input_button'>
                <img src={require('../../img/send.png')} alt="" />
            </button>
        </div>
    )
}

export default InputPanel;