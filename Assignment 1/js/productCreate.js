function createPerson(person) {

    return `
<div class="card">
<img src="${products[person].img}" alt="Avatar" style="width:100%">
<div class="containerr">
    <h4><b>${products[person].name}</b></h4>
    <p>${products[person].position}</p>
    <button class="button button3" id="${person}">ADD</button>
</div>
</div>
    `;

}