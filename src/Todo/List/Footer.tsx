import React from 'react';
import Todo from '../../types/Todo';
import Button from 'antd/lib/button';

interface FooterProps {
  todos: Todo[];
  onFilterChange: (filter: string) => void;
}

export default ({ todos, onFilterChange }: FooterProps) => {
  const outstanding = todos.filter(todo => !todo.completed).length;

  return (
    <div>
      <div style={{width: '60%', display: 'inline-block'}}>
        {outstanding} items outstanding
      </div>
      <div style={{width: '40%', display: 'inline-block', textAlign: 'right'}}>
        <Button style={{marginRight: '10px'}} onClick={() => onFilterChange('ALL')}>All</Button>
        <Button style={{marginRight: '10px'}} onClick={() => onFilterChange('ACTIVE')}>Active</Button>
        <Button onClick={() => onFilterChange('COMPLETED')}>Completed</Button>
      </div>
    </div>
  );
};
