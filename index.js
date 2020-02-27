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
function listarAlunos(){
        
}
function buscarAluno(nomeAluno){
        
}
function matricularAluno(aluno, curso){
    
}
function aplicarFalta(aluno){
    
}    
function aplicarNota(aluno){
    
}  
function aprovarAluno(aluno){
    
}
adicionarAluno("Shefa")
console.log(alunosDaEscola);