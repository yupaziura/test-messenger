// basic

// components

// styles
import './InputPanel.scss';

const InputPanel = (props) => {


    return (
        <div className='input_panel'>
            <input type="text" placeholder='Type your message' />
            <button className='input_button'>
                <img src={require('../../img/send.png')} alt="" />
            </button>
        </div>
    )
}

export default InputPanel;