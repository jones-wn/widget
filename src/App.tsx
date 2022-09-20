import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProgressWidget from './components/ProgressWidget/ProgressWidget.component';
import RangeWidget from './components/RangeWidget/RangeWidget.component';
import NotFound from './components/NotFound/NotFound.component';
import Header from './components/header/Header.component';
function App() {
  return (
    <div className="App">
      <section className="container">
        <Header/>
        <Routes>
            <Route path="/" element={<ProgressWidget/>}></Route>
            <Route path="/rangewidget" element={<RangeWidget/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
