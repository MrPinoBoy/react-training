export default function Input() {
    return(
        <div className="input-section">
            <input type="text" placeholder="Type a new todo" className="todo-input"></input>
            <input type="submit" value="Add Todo" className="todo-submit"></input>
        </div>
    )
}