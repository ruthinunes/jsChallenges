const textInput = document.querySelector('input');
const listContainer = document.querySelector('.task_box');
const clearBtn = document.querySelector('#clearBtn');

// ***** local storage *****
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
};

function addLocalStorage(id, value) {
    const item = { value: value, id: id };
    let itemsList = getLocalStorage();
    itemsList.push(item);
    localStorage.setItem('list', JSON.stringify(itemsList));
};

// ***** main functions *****
function addItem() {
    const id = new Date().getTime().toString();
    let value = textInput.value;

    if (value == '') {
        alert('Please insert a value');
        return;
    };

    addLocalStorage(id, value);
    updateTable();
    textInput.value = "";
};

function updateTable() {
    // console.log('Cleaning');
    listContainer.innerHTML = "";
    const listItems = getLocalStorage();

    listItems.forEach(function (item) {
        createItem(item);
    });
};

function createListItem(id, value) {
    let listItems = getLocalStorage();
    console.log(listItems);

    if (listItems.length === 0) {
        listContainer.innerHTML = "You dont't have task yet";
    }
}

function createItem(item) {
    listContainer.innerHTML += `<li class="task">
                            <p class="" id="${item.id}">${item.value}</p>
                        <div class="settings">
                            <i onclick="showMenu(this)"class="fa-solid fa-ellipsis"></i>
                            <ul class="task-menu">
                                <li onclick='editTask")'><i class="uil uil-pen"></i>Edit</li> -->
                                <li onclick='deleteTask")'><i class="uil uil-trash"></i>Delete</li>
                            </ul>
                        </div>
                    </li>`;
};

function clearTable() {
    listContainer.innerHTML = "";
    localStorage.clear();
};

// ***** events *****
document.addEventListener('keydown', function (e) {

    if (e.code == 'Enter') {
        addItem();
    };
});

window.addEventListener("DOMContentLoaded", function () {
    updateTable();

});
clearBtn.addEventListener('click', clearTable);

