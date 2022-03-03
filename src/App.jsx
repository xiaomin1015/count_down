import { useState } from 'react';
import './App.css';
import Home from './Home';
import Similar from './Similar';
import Privacy from './Privacy';
import Nav from './Nav';
import Professional from './Professional';
import Actionable from './Actionable';
import Write from './Write';

function App() {
    const [fears, setFears] = useState({});
    const [lastId, setLastId] = useState(Object.keys(fears).length);
    const [display, setDisplay] = useState(true);
    function onAdd(task) {
        const id = lastId+1;
        setLastId(id);
        setFears( prevFears => ({
                ...prevFears,
                [id]: {
                    id,
                    task,
                }
            })
        );
        id>=3 && setDisplay(false);
    }
    const [page, setPage] = useState('Home');
    function onNav(e, target) {
        e.preventDefault();
        setPage(target);
    }
    function getRandomArbitrary() {
        return Math.floor(Math.random() * (10000 - 50) + 50);
    }
    const [number] = useState([getRandomArbitrary(),getRandomArbitrary(),getRandomArbitrary()]);
  return (
      <div className="app">
        <header> Nice to meet you</header>
          <div className="body">
              <Nav page = {page} onClick = {setPage}/>
              {page === 'Home' && <Home onClick = {setPage}/>}
              {page === 'Similar' && <Similar fears ={fears} onClick = {setPage} number = {number}/>}
              {page === 'Privacy' && <Privacy/>}
              {page === 'Professional' && <Professional/>}
              {page === 'Actionable' && <Actionable/>}
              {page === 'Write' && <Write
                  onClick = {setPage}
                  fears = {fears}
                  onAdd = {onAdd}
                  display = {display}
              />}
          </div>
        <footer >
            Have a nice day ʕ•ᴥ• ʔ
            <button onClick = {(e) => onNav(e,'Privacy')}
            > read our privacy</button>
        </footer>
      </div>
  );
}

export default App;

