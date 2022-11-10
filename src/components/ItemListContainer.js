function ItemListContainer (props) {
    return(
        <div className="ItemListContainer">
            <ul>
                <li>
                    <h1>{props.gretting}</h1>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer