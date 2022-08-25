// basic
import AvatarPhoto from '../../img/avatars/avatar_main.svg';

// components

// styles
import './Avatar.scss';

const Avatar = (props) => {

    return (
        <div className='avatar'>
            <img src={AvatarPhoto} alt="" />
            <img src={require('../../img/check-circle.png')} alt="" className='circle' />
        </div>
    )
}

export default Avatar;