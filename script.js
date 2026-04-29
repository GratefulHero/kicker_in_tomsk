const form = document.querySelector("#myForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const textarea = document.querySelector("#textarea").value.trim();

    if (name === "") {
        alert("Введите своё имя");
        return;
    }

    if (textarea === "") {
        alert("Напишите, откуда Вы узнал про настольный футбол");
        return;
    }

    const data = {
        name: name,
        textarea: textarea
    }

    const responce = await fetch("https://jsonplaceholder.typicode.com/users", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const result = await responce.json();
    console.log("Ответ сервера:", result)

    alert("Благодарим Вас за обратную связь!");
});