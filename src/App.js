import { Contact } from './models/contact.class';
import ContactComponent from './components/pure/contact';
import './App.css';

function App() {

  const defaultContact = new Contact('Víctor', 'Gómez', 'test@test', true);
  return (
    <div className="App">
      <header className="App-header">
        <ContactComponent contact={defaultContact}></ContactComponent>
      </header>
    </div>
  );
}

export default App;
