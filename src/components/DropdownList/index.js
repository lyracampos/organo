import "./DropdownList.css"

const DropdownList = (props) => {
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select value={props.value} onChange={event => props.onChange(event.target.value)} required={props.required} >
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList