import React, { useState } from 'react';

function Notas() {
    
    const [formData, setFormData] = useState({
            nomeAluno: '',
            disciplina: '',
            notaTestes: '',
            percTrabalhos: '',
            percAtitudes: '',
    });

    return (
        <div className="mt-4 row">

            <div className="w-100">
                <h1>Cálculo da nota final</h1>
                <h2>Dados do Aluno</h2> 
            </div>

            <form className="col-12 row">
                <div className="col-8">
                        <div className="form-group">
                            <label>Nome do Aluno</label>
                            <input type="text" className="form-control" value={formData.nomeAluno} onChange={(e) =>
                                setFormData({ ...formData, nomeAluno: e.target.value })} required />
                        </div>
                </div>

                <div className="col-4">
                        <div className="form-group">
                            <label>Disciplina</label>
                            <input type="text" className="form-control" value={formData.disciplina} onChange={(e) =>
                                setFormData({ ...formData, disciplina: e.target.value })} required />
                        </div>
                </div>

                <div className="col-3">
                        <div className="form-group">
                            <label>Nota dos Testes</label>
                            <input type="text" className="form-control" value={formData.notaTestes} onChange={(e) =>
                                setFormData({ ...formData, notaTestes: e.target.value })} required />
                        </div>

                        <div className="form-group">
                            <label>Nota dos Trabalhos:</label>
                            <input type="text" className="form-control" value={formData.notaTrabalhos} onChange={(e) =>
                                setFormData({ ...formData, notaTrabalhos: e.target.value })} required />
                        </div>

                        <div className="form-group">
                            <label>Nota das Atitudes:</label>
                            <input type="text" className="form-control" value={formData.notaAtitudes} onChange={(e) =>
                                setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                        </div>
                </div>

                <div className="col-3">
                        <div className="form-group">
                            <label>(%) Testes</label>
                            <input type="text" className="form-control" value={formData.percTestes} onChange={(e) =>
                                setFormData({ ...formData, percTestes: e.target.value })} required />
                        </div>

                        <div className="form-group">
                            <label>(%) Trabalhos:</label>
                            <input type="text" className="form-control" value={formData.percTrabalhos} onChange={(e) =>
                                setFormData({ ...formData, percTrabalhos: e.target.value })} required />
                        </div>

                        <div className="form-group">
                            <label>(%) Trabalhos:</label>
                            <input type="text" className="form-control" value={formData.percAtitudes} onChange={(e) =>
                                setFormData({ ...formData, percAtitudes: e.target.value })} required />
                        </div>
                </div>

            </form>
        </div>
    );
}

export default Notas;