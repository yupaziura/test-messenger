// basic

// components
import MessagesWindow from './components/MessagesWindow/MessagesWindow';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import SearchPanel from './components/SearchPanel/SearchPanel';

// styles
import './App.css';

function App() {
  return (
    <div className="main_window">
      <ContactsWindow>
          <SearchPanel/>
      </ContactsWindow>
      <MessagesWindow>

      </MessagesWindow>
    </div>
  );
}

export default App;
