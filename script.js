const form = document.getElementById('form');
const input = document.getElementById('input');
const todosList = document.getElementById('todos');

//form.preventDefault();

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function () {
    const Text = input.value.trim();

    if (Text !== '') {
        const Item = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const TextSpan = document.createElement('span');
        TextSpan.textContent = Text;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                TextSpan.style.textDecoration = 'line-through';
            } else {
                TextSpan.style.textDecoration = 'none';
            }
        });

        editButton.addEventListener('click', function () {
            
        });

        deleteButton.addEventListener('click', function () {
            todosList.removeChild(Item);
        });

       Item.appendChild(checkbox);
       Item.appendChild(TextSpan);
       Item.appendChild(editButton);
       Item.appendChild(deleteButton);

        todosList.appendChild(Item);
        input.value = '';
    }
});
