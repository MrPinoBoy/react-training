export default function TodoList() {
    return (
        <div className="list-section">
            <h2 className="list-title">Todos</h2>
            <ul className="list">
                <li className="list-item">
                    <input type="checkbox"></input>Apprendre à Tibo
                </li>
                <li className="list-item">
                    <input type="checkbox"></input>Aller dans le carré avec Antoine et William ma boi
                </li>
                <li className="list-item">
                    <input type="checkbox"></input>Diner avec Yassine et Adrien
                </li>
            </ul>
        </div>
    )
}