import 'bulmaswatch/superhero/bulmaswatch.min.css';

import { Provider } from 'react-redux';
import { store } from './components/state';
import ReactDOM from 'react-dom';
import TextEditor from './components/text-editor';
//import CodeCell from './components/code-cell';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
