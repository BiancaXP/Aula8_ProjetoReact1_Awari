function Item({ item, onItemClick }) {
    const handleItemClick = () => {
        onItemClick(item);
    }
    return (
        <li>
            <p>{ item.name }</p>
            <button type="button" onClick={handleItemClick}>Ver detalhes</button>
        </li>
    )
}

export default Item