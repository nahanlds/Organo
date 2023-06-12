import './listaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='Lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento=> props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} >
                <option value=""></option>
                {props.itens.map(iten => {
                    return <option key={iten}>{iten}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa