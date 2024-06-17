let createBackup = document.querySelector(".create");

createBackup.addEventListener("click", () => {
    const backupData = {
        NombreBd: "Base de datos",
        VersionBd: "V.1.5",
        Tipo: "Manual",
        Ubicacion: "/backup/",
        Informacion: "backup mensual"
    };

    fetch("http://localhost:9200/dashboard/backup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(backupData)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        console.log("Backup created successfully:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
