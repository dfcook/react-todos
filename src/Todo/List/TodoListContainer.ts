import { bindActionCreators } from 'redux';
import Dispatch  from '../../store/dispatch';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, updateFilter } from '../../store/actions';
import TodoList from './TodoList';
import AppState from '../../store/AppState';

const mapStateToProps = (state: AppState) => ({
  todos: state.todos,
  filter: state.filter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTodo: bindActionCreators(deleteTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  updateFilter: bindActionCreators(updateFilter, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
