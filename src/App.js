// basic

// components
import MessagesWindow from './components/MessagesWindow/MessagesWindow';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ContactPanel from './components/ContactPanel/ContactPanel';

// styles
import './App.css';

function App() {
  return (
    <div className="main_window">
      <ContactsWindow>
          <SearchPanel/>
          <ContactPanel/>
      </ContactsWindow>
      <MessagesWindow>

      </MessagesWindow>
    </div>
  );
}

export default App;
