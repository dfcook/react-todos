import React from 'react';
import Todo from '../../../types/Todo';
import Button from 'antd/lib/button';

interface FooterProps {
  todos: Todo[];
  currentFilter: string;
  updateFilter: (filter: string) => void;
}

export default ({ todos, currentFilter, updateFilter }: FooterProps) => {
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
          onClick={() => updateFilter('ALL')}
        >
          All
        </Button>
        
        <Button
          type={getButtonType('ACTIVE')}
          style={{marginRight: '10px'}}
          onClick={() => updateFilter('ACTIVE')}
        >
          Active
        </Button>

        <Button
          type={getButtonType('COMPLETED')}
          onClick={() => updateFilter('COMPLETED')}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
