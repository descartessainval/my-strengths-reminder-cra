import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';
import ErrorPage from './components/pages/error/ErrorPage';
import MyStrenghtList from './components/pages/MyStrenghtList';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<LoginPage />} /> */}
        <Route exact path="/" element={<MyStrenghtList />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
