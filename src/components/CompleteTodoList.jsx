import React from "react";

export const CompleteTodoList = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <ul>
        <p className="title">完了のTODO</p>
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
