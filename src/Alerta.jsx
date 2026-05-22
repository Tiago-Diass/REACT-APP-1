function Alerta(props) {
    return (
        <div className={`alert alert-${ props.tipo } text-center`} role="alert">
            {props.texto}
        </div>
    );
}

export default Alerta;