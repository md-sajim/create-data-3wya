import logo from './logo.svg';
import './App.css';
import FakeDataObject from './Create-fake-data-object/FakeDataObject';
import JsonDataGanarator from './Create-fake-data-object/FakeDataJsonDataGanator/JsonDataGanarator';
import LodeData from './JsonData/LodeDataJson/LodeData';

function App() {
  return (
    <div className="App">
      <LodeData></LodeData>
     <JsonDataGanarator></JsonDataGanarator>
     <FakeDataObject></FakeDataObject>
    </div>
  );
}

export default App;
