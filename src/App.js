// basic
import { useState } from 'react';

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

  const [search, setSearch] = useState(null)

  return (
    <div className="main_window">
      <ContactsWindow>
          <SearchPanel setSearch={setSearch}/>
          <ContactsPanel search={search}/>
      </ContactsWindow>

      <MessagesWindow>
        <ContactPanel/>
        <MessageList/>
        <InputPanel/>
      </MessagesWindow>
    </div>
  );
}

export default App;
