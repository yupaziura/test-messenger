// basic
import { useState, useEffect } from 'react';

// components

// styles
import './InputPanel.scss';

const InputPanel = (props) => {

    const [message, setMessage] = useState(null);
    // console.log([...props.source[props.index].messages, {type:'out', date:'25.08.2022', time:'12:45', text:'sdg'}])


   
    //    useEffect(()=>{
    //     props.source.map((obj, i)=> {
    //         if (i === props.index) {
    //             obj.messages = [...obj.messages, {type:'out', date:'25.08.2022', time:'12:45', text:'sdg'}]
                
    //         }
    //         props.setSource([...props.source])
    //     })
    //    },[])
          
                
           
         
        // props.source.map((item, i)=> {
            
        //         return [...item, item.messages.map((t)=> {
        //             return [{type:'out', date:'25.08.2022', time:'12:45', text:'sdg'}]
        //         })]})
    

    const Test = (e) => {
        e.preventDefault();

        props.source.map((obj, i)=> {
            if (i === props.index) {
                obj.messages = [...obj.messages, {type:'out', date:'25.08.2022', time:'12:45', text: message}]
                
            }
            props.setSource([...props.source])
        })

        setMessage('')

    }

    return (
        <div className='input_panel'>
            <input onChange={(e)=>{setMessage(e.target.value)}} type="text" placeholder='Type your message' />
            <button onClick={(e)=>{Test(e)}} className='input_button'>
                <img src={require('../../img/send.png')} alt="" />
            </button>
        </div>
    )
}

export default InputPanel;