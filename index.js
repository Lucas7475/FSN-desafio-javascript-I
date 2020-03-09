// Base a ser utilizada
const alunosDaEscola=[
    {   
        nome:"Henrique",
        notas:[],
        cursos:[],
        faltas:5
    },
    {   
        nome:"Edson",
        notas:[],
        cursos:[],
        faltas:2
    },
    {   
        nome:"Bruno",
        notas:[10,9.8,9.6],
        cursos:[],
        faltas:0
    },
    {   
        nome:"Guilherme",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
        faltas:0
    },
    {   
        nome:"Carlos",
        notas:[],
        cursos:[],
        faltas:0
    },
    {   
        nome:"Lucca",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
        faltas:0
    }
];


// implementação
//Variavel instanciada caso ocorra uma exception em alguma função
var exception;

// recebe o nome do candidato e cadastra ele na lista de alunos
function adicionarAluno(nomeAluno){
    try {
        let aluno = {
            nome: nomeAluno.trim(),
            notas:[],
            cursos:[],
            faltas:0
        };
        alunosDaEscola.push(aluno);
        console.log(`Estudante ${nomeAluno.trim()} cadastrado(a) com sucesso!`); 
    } catch (s){
        console.log("Não foi possível cadastrar o estudante.");
        exception = s;        
    }
}
//lista todos os alunos e os cursos matriculados       
function listarAlunos(){
    try{
        alunosDaEscola.forEach(aluno =>{
        console.log(`Nome: ${aluno.nome}`);
        let curso = "Cursos:"
        if(aluno.cursos.length != 0){
            aluno.cursos.forEach(dadosCurso => curso += ` ${dadosCurso.nomeDoCurso}`);
            console.log(`${curso}\n`);
        }else{
            console.log(curso += " Nenhum curso matrículado \n");            
        }
        })
    }catch(s){
        console.log("Falha ao listar os alunos");
        exception = s;        
    }
}
function buscarAluno(nomeAluno){
    let resu = alunosDaEscola.filter(aluno=>{
        return aluno.nome == nomeAluno; 
    });
    if(resu.length !=[]){
        console.log("Estudante encontrado\n");        
        //variavel utilizada para facilitar o manuseio do objeto
        let fulano = resu[0];
        for(let item in fulano){
            if(item == "notas"){
                let notas = fulano[item];
                let exit = "";
                notas.forEach(nota=>{
                    exit += ` ${nota.toString()};`;
                }, "");
                console.log(`${item}:${exit}`);                
            }
            else if(item == "cursos"){
                let cursos = fulano[item];
                if(cursos.length != 0){
                    let curso = "";
                    cursos.forEach(dadosCurso => curso += `${dadosCurso.nomeDoCurso}`);
                    console.log(`${item}: ${curso}`);
                }
                else{
                    console.log(curso += " Nenhum curso matrículado");            
                }
            }
            else{
                console.log(`${item}: ${fulano[item]}`);
            }
           return fulano;              
        }
    }else{
        console.log("Estudante não encontrado!");        
        return null;
    }
}
function matricularAluno(aluno, curso){
    let check = buscarAluno(aluno.nome);
    if(check != null){
        aluno.cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date(),
        })        
        aluno.cursos.forEach(obj=>{
            for(let item in obj){
                if(item =="nomeDoCurso"){
                    console.log(`Curso: ${obj[item]}`);    
                }
                else{
                    let data = obj[item];
                    console.log(`Data da matrícula: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
                }
            }
        });
        console.log("Estudante matriculado\n");
    }
    else{
        console.log("Aluno não cadastrado!");        
    }
}
function aplicarFalta(aluno){
    if(aluno.cursos.length != []){
        let falta = aluno.faltas;
        let fAtual = aluno.faltas + 1;
        falta==0?console.log(`\nFalta aplicada para o aluno ${aluno.nome},` +
         ` tinha ${falta} falta e agora tem ${fAtual} falta.`):console.log(`Falta aplicada para o aluno `+
         `${aluno.nome}, tinha ${falta} faltas e agora tem ${fAtual} faltas.`);        
    }else{
        console.log("Aluno não está matriculado em nenhum curso");        
    }
}    
function aplicarNota(aluno, nota){
    if(aluno.cursos.length != []){
        aluno.notas.push(nota);
        console.log(`\nNota adicionada ao aluno ${aluno.nome}, notas: ${aluno.notas}`);
    }
    else{
        console.log("\nAluno não matriculado em nenhum curso");        
    }
}  
function aprovarAluno(aluno){
    
}

