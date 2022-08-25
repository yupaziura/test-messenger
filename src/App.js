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
  const [subSource, setSubSource] = useState(data);
  const [search, setSearch] = useState(null);
  const [index, setIndex] = useState(null);


  const items = JSON.parse(localStorage.getItem('array'));

  useEffect(() => {
    if (items) {
     setSource(items);
     setSubSource(items)
    }
    else {
      setSource(data);
      setSubSource(data)
    }
  },[]);


  useEffect(()=> {
    setSource(
        search?
        source.filter((item, i)=> {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })
        : items? items : data
    )
}, [search])



  return (
    <div className="main_window">
      <ContactsWindow>
          <SearchPanel setSearch={setSearch}/>
          <ContactsPanel search={search} setIndex={setIndex} setSubSource={setSubSource} source={source}/>
      </ContactsWindow>

      <MessagesWindow>
        {index !== null? <ContactPanel index={index} source={subSource}/> : null}
        <MessageList index={index} source={subSource}/>
        {index !== null? <InputPanel index={index} setSource={setSource} source={subSource}/> : null}
      </MessagesWindow>
    </div>
  );
}

export default App;
