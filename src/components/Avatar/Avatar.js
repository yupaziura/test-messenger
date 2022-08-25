// basic
import AvatarPhoto from '../../img/avatars/avatar_main.svg';

// components

// styles
import './Avatar.scss';

const Avatar = (props) => {

    return (
        <div className='avatar'>
            <img src={AvatarPhoto} alt="" />
        </div>
    )
}

export default Avatar;