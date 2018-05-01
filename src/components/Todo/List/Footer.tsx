import React from 'react';
import Todo from '../../../types/Todo';
import Button from 'antd/lib/button';

interface FooterProps {
  todos: Todo[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default ({ currentFilter, todos, onFilterChange }: FooterProps) => {
  const outstanding = todos.filter(todo => !todo.completed).length;
  const getButtonType = (type: string) => currentFilter === type ? 'primary' : undefined;

  return (
    <div>
      <div style={{width: '60%', display: 'inline-block'}}>
        {outstanding} items outstanding
      </div>
      <div style={{width: '40%', display: 'inline-block', textAlign: 'right'}}>
        <Button 
          type={getButtonType('ALL')}
          style={{marginRight: '10px'}} 
          onClick={() => onFilterChange('ALL')}
        >
          All
        </Button>

        <Button 
          type={getButtonType('ACTIVE')}
          style={{marginRight: '10px'}} 
          onClick={() => onFilterChange('ACTIVE')}
        >
          Active
        </Button>

        <Button 
          type={getButtonType('COMPLETED')}
          onClick={() => onFilterChange('COMPLETED')}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
