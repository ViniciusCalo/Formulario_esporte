function cadastro() {
    //  VARIAVEL PARA O INPUT NOME
    var inputnome = document.getElementById("name");
    //VERIFICAR SE O INPUTNOME ESTÁ ATENDENDO AS REGRAS
    if (inputnome.value.length < 10 || inputnome.value.length > 80) {
        alert("O nome deve ter entre 10 e 80 caracteres");
    }

    //  VARIAVEL PARA O APELIDO  
    var apelido = document.getElementById("nickname");
    //VERIFICAR SE O APELDO ESTÁ ATENDENDO AS REGRAS
    if (apelido.value.length < 2 || apelido.value.length > 20) {
        alert("O nome deve ter entre 2 e 20 caracteres");
    }

    //VARIAVEL PARA AS DATAS
    var dia = document.getElementById("day");
    //VERIFICAR SE O DIA ESTA DE ACORDO
    if (dia.value < 1 || dia.value > 31 || isNaN(dia.value)) {
        alert("O Dia deve ser entre 1 e 31");
    }
    var mes = document.getElementById("month");
    //VERIFICAR SE O MES ESTA DE ACORDO
    if (mes.value < 1 || mes.value > 12 || isNaN(mes.value)) {
        alert("O Mês deve ser entre 1 e 12");
    }
    var ano = document.getElementById("year");
    var anoatual = new Date().getFullYear();
    //VERIFICAR SE O ANO ESTA DE ACORDO
    if (ano.value < 1 || ano.value > anoatual || isNaN(ano.value)) {
        alert("O ano precisa estar entre 1 e 2021")
    }
    //VARIAVEL CPF
    var inputcpf = document.getElementById("cpf");
    var padrao = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;
    //VALIDANDO CPF
    if (!padrao.test(inputcpf.value)) {
        alert("O CPF deve ser no formato NNN.NNN.NNN-NN");
    }
    //VERIFICANDO OS CHECKBOX
    var checkbox = document.getElementsByName("sport");
    var achou = false;
    for (index = 1; index < checkbox.length; index++) {
        if (checkbox[index].checked == true) {
            achou = true;
            break;
        }
    }
    if (!achou) {
        alert("Selecione pelo menos 1 esporte")
        return false
    }
    return false
}


function gerarJson() {
    var obj_json = {
        name: "",
        nickname: "",
        birth_date: "",
        cpf: "",
        team_id: 0,
        sports: []
    }
    var inputnome = document.getElementById("name");
    obj_json.name = inputnome.value;

    var apelido = document.getElementById("nickname");
    obj_json.nickname = apelido.value;

    var inputDia = document.getElementById("day");
    var inputMes = document.getElementById("month");
    var inputAno = document.getElementById("year");
    obj_json.birth_date = inputAno.value +"-"+ inputMes.value +"-"+ inputDia.value;

    var input_cpf = document.getElementById("cpf");
    obj_json.cpf = input_cpf.value;

    var team = document.getElementById("team_id");
    obj_json.team_id = team.value;

    var sports = document.getElementsByName("sport");
    for (var i = 0; i < sports.length; i++) {
        if(sports[i].checked == true){
            obj_json.sports.push(i+1);
        }        
    }
    
    var json = JSON.stringify(obj_json);
    console.log(json)
    document.write("<h1>Dados em Json</h1>");
    document.write(json);

    return json;
}