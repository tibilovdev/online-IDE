import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../components/state';

//досутуп к хранилищу
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
