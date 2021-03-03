import './App.css';
import Nav from './Nav'
import CC from './Card'

function App(props) {
  return (
    <section>
      <Nav />
      <div className="flex">
        <CC />
      </div>
    </section>
  );
}

export default App;
