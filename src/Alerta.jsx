function Alerta(props) {
    return (
        <div className="alert alert-info text-center" role="alert">
            {props.texto}
            {props.tipo && (
                <div className={`alert alert-${props.tipo}`} role="alert">
                    {props.tipo == "success" && "ola"}
                    {props.tipo == 'danger' && "ola"}
                    {props.tipo == 'warning' && "ola"}
                </div>
            )}
        </div>
    );
}
export default Alerta;