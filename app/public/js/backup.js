let creatBackUp = document.querySelector(".create")

creatBackUp.addEventListener("click", () => {
    fetch("http://localhost:9200/backup"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }
    .then()
})