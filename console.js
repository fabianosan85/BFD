let input = document.get_element_by_id("input-tarefa") ;
let botao = document.get_element_by_id("btn-adicionar") ;
let lista = document.get_element_by_id("lista-tarefas") ;
console.log(input) ;
console.log(botao) ;
console.log(lista) ;   
 botao.add_event_listener("click", function () {
    let TEXTO = input.value ;
    if (TEXTO.trim()==) return ;
    let li = document.create_element("li");
    li.textContent = TEXTO ;
    lista.append_child(li) ;
    input.value = "" 
        li.remove()

});
