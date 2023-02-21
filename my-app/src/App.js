import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps';
import StatefulGreeting from './Components/StatefulGreeting';
import EventsClass from './Components/EventsClass';
import EventsFunctional from './Components/EventsFunctional';
import ConditionalRenderingClass from './Components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './Components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="Mike" age="32"/>
      <StatefulGreeting greeting="I'm a stateful greeting component" name="Bob" />
      <EventsClass/>
      <EventsFunctional/>
      <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional connected={true}/>
    </div>
  );
}

export default App;
