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
        }
    }else{
        console.log("Estudante não encontrado!");        
    }
}
function matricularAluno(aluno, curso){
    
}
function aplicarFalta(aluno){
    
}    
function aplicarNota(aluno){
    
}  
function aprovarAluno(aluno){
    
}
buscarAluno("Lucca");