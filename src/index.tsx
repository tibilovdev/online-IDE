import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { store } from './components/state';
import ReactDOM from 'react-dom';
//import TextEditor from './components/text-editor';
//import CodeCell from './components/code-cell';
import CellList from './components/cell-list';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
