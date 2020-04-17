const table = document.getElementById("table");
console.log(table);

for (let i = 0; i < 8; i++) {
  const row = document.createElement("tr");
  row.classList.add("mystyle");
  table.appendChild(row);
}
