import React from 'react';
import Button from 'antd/lib/button';
import { TodoContext } from '../../../TodoContext';

export default () => {
  return (
    <TodoContext.Consumer>
      {(({ todos, filter, updateFilter }) => {
        const outstanding = todos.filter(todo => !todo.completed).length;
        const getButtonType = (type: string) => filter === type ? 'primary' : undefined;

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
        </div>);
      })}
    </TodoContext.Consumer>
  );
};
