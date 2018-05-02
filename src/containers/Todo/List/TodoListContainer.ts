import { bindActionCreators } from 'redux';
import Dispatch  from '../../../store/dispatch';
import { connect } from 'react-redux';
import { todoDeleteAction, todoToggleAction, filterUpdateAction } from '../../../store/actions';
import TodoList from '../../../components/Todo/List/TodoList';
import AppState from '../../../store/AppState';

const mapStateToProps = (state: AppState) => ({
  loading: state.todosLoading,
  todos: state.todos,
  currentFilter: state.filter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTodo: bindActionCreators(todoDeleteAction, dispatch),
  toggleTodo: bindActionCreators(todoToggleAction, dispatch),
  updateFilter: bindActionCreators(filterUpdateAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);