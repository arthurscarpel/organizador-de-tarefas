let tarefas = [];

let materia = document.getElementById("materia");
let tarefa = document.getElementById("tarefa");
let cadastrar = document.getElementById("cadastrar");
let tabela = document.getElementById("tabela");
let total = document.getElementById("total");
let concluidas = document.getElementById("concluidas");

let tarefasConcluidas = 0;


// cadastrar tarefa
cadastrar.addEventListener("click", function() {

    if (materia.value == "" || tarefa.value == "") {
        alert("Preencha todos os campos!");
        return;
    }

    let novaTarefa = {
        materia: materia.value,
        tarefa: tarefa.value
    };

    tarefas.push(novaTarefa);

    materia.value = "";
    tarefa.value = "";

    atualizarTabela();
});


// atualizar tabela
function atualizarTabela() {

    tabela.innerHTML = "";

    total.textContent = tarefas.length;

    concluidas.textContent = tarefasConcluidas;


    tarefas.map(function(item, index) {

        tabela.innerHTML += `
            <tr>

                <td>${item.materia}</td>

                <td>${item.tarefa}</td>

                <td>

                    <button onclick="concluirTarefa(${index})">
                        Concluir
                    </button>

                    <button onclick="editarTarefa(${index})">
                        Editar
                    </button>

                    <button onclick="excluirTarefa(${index})">
                        Excluir
                    </button>

                </td>

            </tr>
        `;

    });

}


// concluir tarefa
function concluirTarefa(index) {

    tarefas.splice(index, 1);

    tarefasConcluidas++;

    atualizarTabela();

}


// excluir tarefa
function excluirTarefa(index) {

    tarefas.splice(index, 1);

    atualizarTabela();

}


// editar tarefa
function editarTarefa(index) {

    let novoNome = prompt("Digite a nova tarefa:");

    if (novoNome != null && novoNome != "") {

        tarefas[index].tarefa = novoNome;

        atualizarTabela();

    }

}

