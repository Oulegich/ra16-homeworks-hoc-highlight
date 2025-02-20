import './App.css'
import videos from '../data/videos.json'
import { useState } from 'react';
import List from './components/List';

function App() {
  const [list] = useState<Video[]>(videos);

  return (
    <List list={list} />
  )
}

export default App
