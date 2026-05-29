import React, { useState } from 'react';

function Notas() {

    const [resultado, setresultado] = useState("por favor, preencha os campos e clique em calcular");
    const [porcentagemTestes, setPorcentagemTestes] = useState(60);
    const [porcentagemTrabalhos, setPorcentagemTrabalhos] = useState(0);
    const [porcentagemAtitudes, setPorcentagemAtitudes] = useState(40);

    /**/

    function calcularNotaFinal() {
        
        const notaTestes = (porcentagemTestes / 100) * parseFloat(document.getElementById("notastestes").value);
        const notaTrabalhos = (porcentagemTrabalhos / 100) * parseFloat(document.getElementById("notastrabalhos").value);
        const notaAtitudes = (porcentagemAtitudes / 100) * parseFloat(document.getElementById("notasatitudes").value);
        //return (notaTestes + notaTrabalhos + notaAtitudes).toFixed(2);
        if (porcentagemTestes + porcentagemTrabalhos + porcentagemAtitudes !== 100) {
            setresultado("A soma das porcentagens deve ser igual a 100%");
        } else {
            setresultado(`A nota final é: ${((notaTestes + notaTrabalhos + notaAtitudes).toFixed(2))}`);
        }
        
    }


    return (
        <div className="row">

            <div className="col-12">
                <h2>Cálculo de nota final</h2>
                <h4>Dados do Aluno</h4>
            </div>

            <div className="col-12">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label htmlFor="nomealuno">Nome do aluno</label>
                            <input required type="text" className="form-control" id="nomealuno" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="disciplina">Disciplina</label>
                            <input required type="text" className="form-control" id="disciplina" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="notastestes">Notas dos testes</label>
                            <input required type="number" min="0" max="20" step="0.1" className="form-control" id="notastestes" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="porcentagemtestes">% dos testes</label>
                            <input required type="number" min="0" max="100" value={porcentagemTestes} onChange={(e) => setPorcentagemTestes(parseFloat(e.target.value))} className="form-control" id="porcentagemtestes" />
                        </div>
                    </div>

                    
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="notastrabalhos">Notas dos trabalhos</label>
                            <input required type="number" min="0" max="20" step="0.1" className="form-control" id="notastrabalhos" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="porcentagemtrabalhos">% dos trabalhos</label>
                            <input required type="number" min="0" max="100" value={porcentagemTrabalhos} onChange={(e) => setPorcentagemTrabalhos(parseFloat(e.target.value))} className="form-control" id="porcentagemtrabalhos" />
                        </div>
                    </div>

                    
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="notasatitudes">Notas das atitudes</label>
                            <input required type="number" min="0" max="20" step="0.1" className="form-control" id="notasatitudes" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="porcentagematitudes">% das atitudes</label>
                            <input required type="number" min="0" max="100" value={porcentagemAtitudes} onChange={(e) => setPorcentagemAtitudes(parseFloat(e.target.value))} className="form-control" id="porcentagematitudes" />
                        </div>
                    </div>

                    <button type="button" className="mt-3 btn btn-primary" onClick={calcularNotaFinal}>Calcular</button>
                    &nbsp;
                    <button type="reset" className="mt-3 btn btn-danger">Limpar</button>

                    <div className="mt-3 mb-3">{resultado}</div>

                </form>
            </div>

        </div>
    );
}

export default Notas;