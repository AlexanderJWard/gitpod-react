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
import HooksCounter from './Components/HooksCounter';
import ControlledFormHooks from './Components/ControlledFormHooks';
import UseStateWithArrays from './Components/UseStateWithArrays';
import UseStateWithObjects from './Components/UseStateWithObjects';
import UseEffectCounter from './Components/UseEffectCounter';
import UseEffectCounterContainer from './Components/UseEffectCounterContainer';
import Coordinates from './Components/ReactPracticeCoordinates';
import ReactPractiseCoordinates from './Components/ReactPracticeCoordinates';
import ReactPracticeCounter from './Components/ReactPracticeCounter';
import ReactPracticeForm from './Components/ReactPracticeForm';
import HTTPRequests from './Components/HTTPRequests';
import HTTPPost from './Components/HTTPPost';
import HTTPHooks from './Components/HTTPHooks';

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
      <UncontrolledForm/>
      <SearchBar/>
      <HooksCounter/>
      <ControlledFormHooks/>
      <UseStateWithArrays/>
      <UseStateWithObjects/>
      <UseEffectCounter/>
      <UseEffectCounterContainer/> */}
      {/* <ReactPractiseCoordinates/>
      <ReactPracticeCounter/>
      <ReactPracticeForm/> */}
      {/* <HTTPRequests/>
      <HTTPPost/> */}
      <HTTPHooks/>
    </div>
  );
}

export default App;
