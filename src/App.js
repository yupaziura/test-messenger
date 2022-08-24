// basic
import data from './db/source.js';
import { useState, useEffect } from 'react';

// components
import MessagesWindow from './components/MessagesWindow/MessagesWindow';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ContactsPanel from './components/ContactsPanel/ContactsPanel';
import ContactPanel from './components/ContactPanel/ContactPanel';
import InputPanel from './components/InputPanel/InputPanel';
import MessageList from './components/MessageList/MessageList';

// styles
import './App.css';

function App() {

  const [source, setSource] = useState(data);
  const [search, setSearch] = useState(null);
  const [index, setIndex] = useState(null);


  useEffect(()=> {
    setSource(
        search?
        source.filter((item, i)=> {
            return item.name.includes(search)
        })
        : data
    )
}, [search])



  return (
    <div className="main_window">
      <ContactsWindow>
          <SearchPanel setSearch={setSearch}/>
          <ContactsPanel search={search} setIndex={setIndex} source={source}/>
      </ContactsWindow>

      <MessagesWindow>
        <ContactPanel/>
        <MessageList index={index} source={source}/>
        {index !== null? <InputPanel index={index} setSource={setSource} source={source}/> : null}
      </MessagesWindow>
    </div>
  );
}

export default App;
