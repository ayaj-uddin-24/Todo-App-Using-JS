const form = document.querySelector("form");
const title = form.querySelector("#title");
const desc = form.querySelector("#desc");
const list = document.getElementById("list");

const todos = [];
let count = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    count++;

    let titleVal = title.value;
    let descVal = desc.value;

    let li = document.createElement('li');
    li.innerHTML = `<div class="content">
                        <h3>${titleVal}</h3>
                        <p>${descVal}</p>
                    </div>
                    <button onClick="deleteBtn(this)"><i class="fa-solid fa-trash"></i></button>`;

    list.appendChild(li)

    const head3 = li.querySelector('.content').querySelector('h3').innerText;
    const para = li.querySelector('.content').querySelector('p').innerText;
    todos.push({ id: count, head3, para });
    localStorage.setItem('userData', JSON.stringify(todos));

    title.value = '';
    desc.value = '';
});

function deleteBtn(e) {
    let parent = e.parentElement;
    list.removeChild(parent);
}

function getValue() {
    let userTodos = JSON.parse(localStorage.getItem('userData'));

    for (let i = 0; i < userTodos.length; i++) {
        let head = userTodos[i].head3;
        let para = userTodos[i].para;

        let li = document.createElement('li');
        li.innerHTML = `<div class="content">
                        <h3>${head}</h3>
                        <p>${para}</p>
                    </div>
                    <button onClick="deleteBtn(this)"><i class="fa-solid fa-trash"></i></button>`;

        list.appendChild(li)
    }

}
getValue();