let names =document.createElement('h1')
let img =document.createElement('img')
let app = document.getElementById('app')


fetch('https://pokeapi.co/api/v2/pokemon')
.then(res => res.json())
.then(data => {
        for(let i =0 ; i < 10 ; i++){
        let item =document.createElement('li')
        item.innerHTML = data.results[i].name
        list.appendChild(item)

}

    // names.innerHTML = data.name;
    // img.src = data.species.url;
    // console.log(data);
    //     app.append(names)
    //     app.append(img)
    })
    .catch(er => console.log('This is an Error code' , er))