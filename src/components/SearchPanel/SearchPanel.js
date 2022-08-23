// basic

// components
import Avatar from '../Avatar/Avatar';
import Search from '../Search/Search';

// styles
import './SearchPanel.scss';

const SearchPanel = (props) => {

    return (
        <div className='search_panel'>
            <Avatar/>
            <Search/>
        </div>
    )
}

export default SearchPanel;