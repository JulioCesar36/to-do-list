
// funçaõ que adiciona tarefa
function addTask(){
    //titulo da tarefa
    const tasktitle = document.querySelector('#task-title').value
    
    if(tasktitle){
        // clona template
        const template = document.querySelector('.template')
        const newtask = template.cloneNode(true)
       
        // adiciona titulo
        newtask.querySelector('.task-title').textContent = tasktitle

        //remover as classes desnecesarias
        newtask.classList.remove('template')
        newtask.classList.remove('hide')

        // adicionar tarefa a lista
        const list = document.querySelector('#task-list')
        list.appendChild(newtask)

        //adicionar o elemento de remover
        const removeBtn = newtask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this)
        })

        // adicionar evento de completar tarefa
        const donebtn = newtask.querySelector('.done-btn').addEventListener('click',function(){
            completetask(this)
        })

        //limpar texto
        document.querySelector('#task-title').value = ''
    }
}

//função de remover a tarefa
function removeTask(task){
    //parentNode acessao elento pai o 'li' que queremos remover
    task.parentNode.remove(true)
}

    //função de completar terefa
    function completetask(task){
        const taskcomplete = task.parentNode
        //toggle se tiver com done ele tira
        // se não tiver done ele coloca
        taskcomplete.classList.toggle('done')


}
 // evento de adicinar a tarefa
    const addbtn = document.querySelector('#add-bnt')

    addbtn.addEventListener("click", function(e) {
        e.preventDefault()

        addTask()

    })