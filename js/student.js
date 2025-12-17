async function loadAll() {
  const res = await fetch("data/documents.json");
  const docs = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = docs.map(d =>
    `<div class="card">
      <b>${d.name}</b><br>
      <a href="${d.folder}">Mở thư mục / Tải tài liệu</a>
    </div>`
  ).join("");
}

async function search() {
  const key = document.getElementById("search").value.toLowerCase().trim();
  const res = await fetch("data/documents.json");
  const docs = await res.json();
  const result = document.getElementById("result");

  const found = docs.filter(d => d.name.toLowerCase().includes(key));

  if (found.length === 0) {
    result.innerHTML = "<p>Không tìm thấy kết quả</p>";
    return;
  }

  result.innerHTML = found.map(d => {
    // Liệt kê tất cả file trong folder với link tải
    const links = d.files.map(f =>
      `<a href="${d.folder}/${f}" download>${f}</a>`
    ).join("<br>");
    return `<div class="card">
      <b>${d.name}</b><br>${links}
    </div>`;
  }).join("");
}

loadAll();
