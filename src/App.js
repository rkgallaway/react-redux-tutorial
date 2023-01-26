import React from 'react';
import StudentArea from './Components/StudentArea';
import TaLounge from './Components/TaLounge';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StudentArea />}/>
          <Route path="/ta-lounge" element={<TaLounge />}/>
        </Routes>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
