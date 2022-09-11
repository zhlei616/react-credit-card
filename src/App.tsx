import './App.css';
import CardRegisterForm from './pages/card-register-form/CardRegisterForm';
import Menu from './components/menu/Menu';
import { UserProps } from './models/UserProps';

function App() {
  const currentUser : UserProps = {
    FirstName: "Larry",
    LastName: "Zhang"
  };

  return (
    <div className='app'>
      <Menu/>
      <CardRegisterForm {...currentUser}/>
    </div>
  );
}

export default App;
