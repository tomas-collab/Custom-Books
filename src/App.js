import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import BookList from './Component/BookList';

function App() {
  return (
    <div className="App">
      <Container>
        <BookList text='Thomas'/>
      </Container>
    </div>
  );
}

export default App;
