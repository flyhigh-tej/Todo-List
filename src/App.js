import Todo from './components/Todo';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='A' />
      <Todo text='B' />
      <Todo text='C' />
      <Modal />
      <Backdrop />   
      
      
    </div>
  );  
}     

export default App;
