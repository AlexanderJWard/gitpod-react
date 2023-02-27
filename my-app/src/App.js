import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps';
import StatefulGreeting from './Components/StatefulGreeting';
import EventsClass from './Components/EventsClass';
import EventsFunctional from './Components/EventsFunctional';
import ConditionalRenderingClass from './Components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './Components/ConditionalRenderingFunctional';
import NestingComponents from './Components/NestingComponents';
import MethodsAsPropsParent from './Components/MethodsAsPropsParent';
import RenderingLists from './Components/RenderingLists';
import LifeCyclesCDM from './Components/LifeCyclesCDM';
import LifeCyclesCDU from './Components/LifeCyclesCDU';
import LifeCyclesCWU from './Components/LifeCyclesCWU';
import ControlledForm from './Components/ControlledForm';
import UncontrolledForm from './Components/UncontrolledForm';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you" name="Mike" age="32"/>
      <StatefulGreeting greeting="I'm a stateful greeting component" name="Bob" />
      <EventsClass/>
      <EventsFunctional/>
      <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional connected={true}/>
      <NestingComponents/>
      <MethodsAsPropsParent/>
      <RenderingLists/>
      <LifeCyclesCDM/>
      <LifeCyclesCDU/>
      <LifeCyclesCWU/>
      <ControlledForm/>
      <UncontrolledForm/> */}
      <SearchBar/>
    </div>
  );
}

export default App;
