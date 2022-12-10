import * as React from 'react';
import './todo-list.scss';

type Props = {
    todoList: string[];
};
export const TodoList = ({todoList}: Props) => {
    return (
        <div className="todo-list-container">
            {todoList.map((subject) => {
                return (
                    <div className="todo" key={subject}>
                        <p>{subject}</p>
                    </div>
                );
            })}
        </div>
    );
};
