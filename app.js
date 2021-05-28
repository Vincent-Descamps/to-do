let container = document.getElementById("container");
let button = document.getElementById("button");
let input = document.getElementById("input");


button.addEventListener('click', function (e) {
    //dclaration des nouveaux elements

    let div = document.createElement('div');
    let newDiv = document.createElement('div');
    let button = document.createElement('button');
    let button1 = document.createElement('button');
    let button2 = document.createElement('input');

    //integration des nouveaux elements(div et newDiv)
    div.innerText = input.value;
    container.appendChild(div);
    container.appendChild(newDiv);
    div.classList.add("div1")
    newDiv.classList.add("div2")

    //Integration du boutton modifier
    button.innerText = "Modifier";
    button.classList.add("modifier");
    newDiv.appendChild(button);

    //integration du boutton enlever
    button1.innerText = "Enlever";
    button1.classList.add("enlever");
    newDiv.appendChild(button1);

    //integration de la checkbox
    button2.type = "checkbox";
    newDiv.appendChild(button2);
    button2.classList.add("fait");

    //action du boutton enlever
    button1.addEventListener('click', function (e) {
        container.removeChild(div);
        container.removeChild(newDiv);
    })
    //action du boutton  Modifier
    button.addEventListener('click', function (e) {
        div.innerText = "modifiez votre text...";
        div.contentEditable = true;
    })
});

