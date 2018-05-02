import { bindActionCreators } from 'redux';
import Dispatch  from '../../../store/dispatch';
import { connect } from 'react-redux';
import { todoAddAction } from '../../../store/actions';
import AddTodo from '../../../components/Todo/Add/AddTodo';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: bindActionCreators(todoAddAction, dispatch)
});

export default connect(null, mapDispatchToProps)(AddTodo);