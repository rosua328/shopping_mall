'use strict'

function loadItems(){
    return fetch('./data/data.json')
    .then(response=> response.json())
    .then(json=>json.items);
}


function displayItems(items){
    const item_box = document.querySelector('.items');
    item_box.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `
    <li class="item">
    <img src="${item.image}" alt="" class="item_thumbnail">
    <span class="item_description">male, large</span>
</li>
    `;
}


function checkit(event, items){
const dataset = event.target.dataset; // 버튼의 탈겟
const key = dataset.key;
const value = dataset.value;
if(key==null || value ==null){
    return;
}
const filtered = items.filter(item=>(item[key]===value));
displayItems(filtered);
}



function setItems(items){
const logo = document.querySelector('.shopping_icon');
const menu = document.querySelector('.menu');
logo.addEventListener('click', ()=>displayItems(items));
menu.addEventListener('click', (event)=>checkit(event, items));
}



loadItems()
.then(items =>{
displayItems(items);
setItems(items);
})
.catch(console.log)