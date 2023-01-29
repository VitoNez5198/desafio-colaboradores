import React from 'react'
import './index.css'
import AddEmpl from './components/AgregarColaboradores';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid className='col-sm-10 '>
      <AddEmpl />
      
    
    </Container>
  );
}

export default App;