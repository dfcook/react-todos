import React from 'react';
import { Input } from 'antd';

interface AddTodoProps {
  addTodo: (title: string) => void;
}

export default ({ addTodo }: AddTodoProps) => {
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
};
