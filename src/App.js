import logo from './logo.svg';
import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function App() {
  const items = [
    {
      id: 0,
      title: "Cobol"
    },
    {
      id: 1,
      title: "JavaScript"
    },
    {
      id: 2,
      title: "Basic"
    },
    {
      id: 3,
      title: "PHP"
    },
    {
      id: 4,
      title: "Java"
    }
  ];

  return (
    <div >
      <header>
        <ReactSearchAutocomplete
            items={items}
            fuseOptions={{keys: ["id", "title"]}}
            resultStringKeyName="title"
            showIcon={false}
            styling={{ zIndex: 4 }} // To display it on top of the search box below
            autoFocus
          />
      </header>
    </div>
  );
}

export default App;
