import ReactRedux from 'react-redux';
import AppState from './AppState';

export default interface Dispatch extends ReactRedux.Dispatch<AppState> {

}
