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
        return array.sort((x,y)=>{ return x.name === props.source[index].name ? -1 : y.name === props.source[index].name ? 1 : 0; });
    }



    const sendMessage = (e) => {
        e.preventDefault();

        const fetchPromise = fetch("https://api.chucknorris.io/jokes/random");
        
        

        props.source.map((obj, i)=> {
            if (i === props.index) {
                obj.messages = [...obj.messages, {type:'out', date:formatedDate, time:formatedTime, text: message}]
            }
            props.setSource(props.source.length > 1 ? moveUp([...props.source], props.index) : [...props.source])

        })
        localStorage.setItem('array', JSON.stringify(props.source))


        setMessage('');

        setTimeout(()=> {
            fetchPromise.then(response => {
                return response.json();
                }).then(res => {
                // console.log(res.value);
                props.source.map((obj, i)=> {
                    if (i === props.index) {
                        obj.messages = [...obj.messages, {type:'in', date:formatedDate, time:formatedTime, text: res.value}]
                    }
                    props.setSource(props.source.length > 1 ? moveUp([...props.source], props.index) : [...props.source])
        
                })  
                localStorage.setItem('array', JSON.stringify(props.source))
                }).catch(error => console.log(error));
        
        },15000)

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