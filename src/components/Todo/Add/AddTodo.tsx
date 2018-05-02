import React from 'react';
import { Input } from 'antd';
import { TodoContext } from '../../../TodoContext';

export default () => {
  return (
    <TodoContext.Consumer>
      {({addTodo}) => {
        const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter' && addTodo) {
            addTodo(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        };

        return (
          <Input
            autoFocus={true}
            type="text"
            className="form-control"
            placeholder="What needs to be done?"
            onKeyUp={keyHandler}
          />
        );
      }}
    </TodoContext.Consumer>
  );
};
