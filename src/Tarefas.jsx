import React, { useState } from 'react';

function Tarefas() {
    // Estado único "formData" guarda todos os campos do formulário num objeto
    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: '',
    });
    //Crie uma variável de estado de nome tarefas, deve ser inicializada com um array vazio: [ ]
    const [tarefas, setTarefas] = useState([]);

    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    // O campo id não deve aparecer no formulário e deve ser gerado automaticamente
    const novoId = Date.now();

    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setTarefas([...tarefas, novaTarefa]); // guarda os dados preenchidos
    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }

    return (
        <div className="mt-4 row">
            <div class="col-8">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Titulo</label>
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
                    <button type="button" className="btn btn-outline-secondary"
                        onClick={limparFormulario}>Limpar</button>
                </form>
            </div>

            <div class="col-4">
                {/* Mostra os dados submetidos se existirem */}
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome:</strong> {dadosSubmetidos.nome}</p>
                            <p><strong>Email:</strong> {dadosSubmetidos.email}</p>
                            <p><strong>Telefone:</strong> {dadosSubmetidos.telefone}</p>
                            <p><strong>Morada:</strong> {dadosSubmetidos.morada}</p>
                            <p><strong>Código Postal:</strong> {dadosSubmetidos.codPostal}</p>
                            <p><strong>Mensagem:</strong> {dadosSubmetidos.mensagem}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Tarefas;