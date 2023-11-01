export default function TodoItem({_id, task, isCompleted, changeStatusHandler}) {
    const onChangeStatusClick = () => {
        changeStatusHandler(_id);
    };

    return (
        <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
            <td>{task}</td>
            <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}