import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Chat } from './pages/Chat';
import { Upload } from './pages/Upload';
import { Library } from './pages/Library';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 lg:pl-64">
        <Navigation />
        <main className="h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/library" element={<Library />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;