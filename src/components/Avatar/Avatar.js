// basic
import AvatarPhoto from '../../img/avatar-1.svg';

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