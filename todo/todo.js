let btn =document.getElementById('btn')
let list =document.getElementById('list')
let form =document.getElementById('form')


btn.onclick=function(){

let value =form.value
    let item =document.createElement('li')
    let del =document.createElement('button')
    let edit =document.createElement('button')
    item.setAttribute('id', value)

    del.innerHTML ='delete'
    edit.innerHTML ='edit'
    item.innerHTML =value

    item.appendChild(del)
    item.appendChild(edit)
    list.append(item)
    form.value= " "

    del.onclick=function(){
        list.removeChild(item)
    }

    edit.onclick= function(){
    //    let input= document.createElement('input')
    //     input.appendChild(list)
    form.value=item.id
form.value =item.id
btn.innerHTML ='edit'
btn.setAttribute('id', 'edit')
let edits = document.getElementById('edit')
edits.onclick= function(){
    let newItem = document.createElement('li')
    newItem.innerHTML= form.value

    let items = document.getElementById(item.id)
    list.replaceChild(newItem ,items)
    newItem.appendChild(del)
    newItem.appendChild(edit)
    btn.innerHTML ='Add'
    btn.setAttribute('id' , 'btn')
    form.value = " "
    // let items =document.getElementById(item.id)
   
}


// let a= 
// btn.innerHTML ='edit'



// if(a){
//     item.innerHTML = item.value


// }

    
    
    }
}



// APIs
