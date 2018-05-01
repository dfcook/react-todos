import React from 'react';
import { Button, Table } from 'antd';
import Todo from '../../../types/Todo';
import Footer from './Footer';

interface TodoListProps {
  currentFilter: string;
  todos: Todo[];
  todosLoading: boolean;
  onDeleteTodo: (todo: Todo) => void;
  onUpdateFilter: (filter: string) => void;
}

export default ({ currentFilter, todos, todosLoading, onDeleteTodo, onUpdateFilter }: TodoListProps) => {
  const columns = [{
    key: 'complete',
    width: '10%',
    render: (text: string, record: Todo) => (
      <input type="checkbox" defaultChecked={record.completed} onClick={() => record.completed = !record.completed} />
    )
  }, {
    key: 'title',
    title: 'Thing to do',
    render: (text: string, record: Todo) => (
      <span>
        <span style={{fontWeight: 'bold'}}>{record.order}.</span>
        <span className={record.completed ? 'completed' : 'active'}>{record.title}</span>
      </span>
    )
  }, {
    key: 'delete',
    width: '10%',
    render: (text: string, record: Todo) => (
      <span style={{width: '100%', textAlign: 'right'}} onClick={() => onDeleteTodo(record)}>
        <Button>Delete</Button>
      </span>
    )
  }];

  return (
    <Table
      rowKey={(record: Todo) => record.id.toString()}
      columns={columns}
      dataSource={todos}
      bordered={true}
      pagination={false}
      loading={todosLoading}
      size="middle"
      footer={() => <Footer currentFilter={currentFilter} todos={todos} onFilterChange={onUpdateFilter} />}
    />
  );
};
