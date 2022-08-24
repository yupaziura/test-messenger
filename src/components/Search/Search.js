// basic

// components

// styles
import './Search.scss';

const Search = (props) => {

    return (
        <div className='search'>
            <input type="text" placeholder='Search or start new chat' onChange={(e)=>{props.setSearch(e.target.value)}}/>
        </div>
    )
}

export default Search;