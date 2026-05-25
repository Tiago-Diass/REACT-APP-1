import React, { useState } from 'react';

function Tarefas() {

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: ''
    });

    const [tarefas, setTarefas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setDadosSubmetidos(formData);

        const novaTarefa = {
            id: Date.now(),
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setTarefas([...tarefas, novaTarefa]);
    }

    function limparFormulario() {
        setFormData({ id: '', titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }

    function newTarefa() {
        const novaTarefa = {
            id: Date.now(),
            titulo: 'awfawfawf',
            data: 'awgawg',
            descricao: 'awgfawgwag'
        };
        setFormData(novaTarefa);
        setTarefas([...tarefas, novaTarefa]);
        setDadosSubmetidos(null);
    }

    function eliminaTarefa(id) {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }

    function limparLista() {
        setTarefas([]);
    }

    return (
        <div className="mt-4 row">

            <div className="col-6">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>
                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" value={formData.data} onChange={(e) =>
                            setFormData({ ...formData, data: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>
                            setFormData({ ...formData, descricao: e.target.value })} />
                    </div>

                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary mr-2"
                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-secondary mr-2"
                        onClick={newTarefa}>Nova Tarefa</button>
                    
                    <button type="button" className="btn btn-outline-danger"
                        onClick={limparLista}>Limpar Lista</button>
                </form>
            </div>




            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Título:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="list-group-item">
                            <h5>{tarefa.titulo}</h5>
                            <p>{tarefa.data}</p>
                            <p> {tarefa.descricao}</p>
                            <button className="btn btn-danger" onClick={() => eliminaTarefa(tarefa.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Tarefas;