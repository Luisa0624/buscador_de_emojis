import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import { useState } from 'react';
import Result from './components/Result';

function App() {

  const [valueEmoji, setValueEmoji] = useState('fruit');

  return (
    <div className="App">
      <Header/>
      <Form setValueEmoji={setValueEmoji}></Form>
      <Result valueEmoji={valueEmoji}/>
      <Footer/>
    </div>
  );
}

export default App;
