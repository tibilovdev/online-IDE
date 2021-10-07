import { actionCreators } from '../components/state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// досуп к экшнам
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

//const { updateCell } = useActions;
