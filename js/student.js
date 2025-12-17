async function loadAll() {
  const res = await fetch("data/documents.json");
  const docs = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = "";
  docs.forEach(d => {
    list.innerHTML += `<div class="card">
      <b>${d.code}</b> - ${d.name}<br>
      <a href="${d.folder}">Mở thư mục</a>
    </div>`;
  });
}

async function search() {
  const key = document.getElementById("search").value.toLowerCase();
  const res = await fetch("data/documents.json");
  const docs = await res.json();
  const result = document.getElementById("result");
  const found = docs.filter(d =>
    d.code.toLowerCase().includes(key) ||
    d.name.toLowerCase().includes(key)
  );

  if (found.length === 0) {
    result.innerHTML = "<p>Không tìm thấy</p>";
    return;
  }

  result.innerHTML = found.map(d =>
    `<div class="card">
      <b>${d.code}</b> - ${d.name}<br>
      <a href="${d.folder}">Mở thư mục</a>
    </div>`
  ).join("");
}

loadAll();
