const input = document.querySelector('.input');
const button = document.querySelector('main div button');
const list = document.querySelector('.list');


button.addEventListener('click', (input, list) => {
    if (input != '') {
        
        const newItem = document.createElement('li');
        const deleteButton = document.createElement('button')
        const text = input.value;
        deleteButton = '❌'.textContent;  
    
        newItem.appendChild(text + deleteButton); 
        list.appendChild(newItem);  

        deleteButton.addEventListener('click', () => {
            const li = this.parentNode
            li.remove()
        });
    };
});