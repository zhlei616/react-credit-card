import './App.css';
import CardRegistryForm from './pages/card-registry-form/CardRegistryForm';
import Menu from './components/menu/Menu';
import { UserProps } from './models/UserProps';

function App() {
  const user : UserProps = {
    FirstName: "Larry",
    LastName: "Zhang"
  };

  return (
    <div>
      <Menu/>
      <CardRegistryForm {...user}/>
    </div>
  );
}

export default App;
