import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps';
import StatefulGreeting from './Components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="Mike" age="32"/>
      <StatefulGreeting greeting="I'm a stateful greeting component" name="Bob" />
    </div>
  );
}

export default App;
