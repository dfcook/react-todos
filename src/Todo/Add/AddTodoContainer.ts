import { bindActionCreators } from 'redux';
import Dispatch  from '../../store/dispatch';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';
import AddTodo from './AddTodo';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: bindActionCreators(addTodo, dispatch)
});

export default connect(null, mapDispatchToProps)(AddTodo);