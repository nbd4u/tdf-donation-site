fetch("REPLACE_WITH_SHEET_PUBLIC_JSON")
.then(res => res.json())
.then(data => {
    const tbody = document.querySelector("tbody");

    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.innerText = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
});

document.getElementById("search").addEventListener("keyup", function() {
    const value = this.value.toLowerCase();
    document.querySelectorAll("tbody tr").forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
    });
});
