const grid = document.getElementById('grid')
const status = document.getElementById('status')
const dropzone = document.getElementById('dropzone')
const fileInput = document.getElementById('file-input')
const search = document.getElementById('search')
const bucketInfo = document.getElementById('bucket-info')

let allObjects = []

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function render() {
  const term = search.value.trim().toLowerCase()
  const filtered = term ? allObjects.filter((o) => o.key.toLowerCase().includes(term)) : allObjects
  grid.innerHTML = ''
  for (const obj of filtered) {
    const el = document.createElement('div')
    el.className = 'item'
    const ext = obj.key.split('.').pop().toUpperCase()
    el.innerHTML = `
      <div class="thumb">${obj.isImage ? `<img src="${obj.url}" loading="lazy" alt="">` : `<span class="ext">${ext}</span>`}</div>
      <div class="meta">
        <div class="name" title="${obj.key}">${obj.key.split('/').pop()}</div>
        <div class="size">${formatSize(obj.size)}</div>
        <button data-url="${obj.url}">Copy URL</button>
      </div>`
    grid.appendChild(el)
  }
}

async function loadObjects() {
  status.textContent = 'Loading…'
  const res = await fetch('/api/objects')
  allObjects = await res.json()
  bucketInfo.textContent = `${allObjects.length} file${allObjects.length === 1 ? '' : 's'}`
  status.textContent = ''
  render()
}

async function uploadFile(file) {
  status.textContent = `Uploading ${file.name}…`
  const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
    method: 'POST',
    headers: { 'content-type': file.type || 'application/octet-stream' },
    body: file,
  })
  if (!res.ok) {
    status.textContent = `Failed to upload ${file.name}: ${(await res.json()).error}`
    return
  }
  status.textContent = `Uploaded ${file.name}`
  await loadObjects()
}

grid.addEventListener('click', async (e) => {
  const url = e.target?.dataset?.url
  if (!url) return
  await navigator.clipboard.writeText(url)
  const original = e.target.textContent
  e.target.textContent = 'Copied!'
  setTimeout(() => { e.target.textContent = original }, 1200)
})

search.addEventListener('input', render)

dropzone.addEventListener('click', () => fileInput.click())
fileInput.addEventListener('change', () => {
  for (const file of fileInput.files) uploadFile(file)
  fileInput.value = ''
})

;['dragover', 'dragleave', 'drop'].forEach((evt) => {
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault()
    dropzone.classList.toggle('dragover', evt === 'dragover')
  })
})
dropzone.addEventListener('drop', (e) => {
  for (const file of e.dataTransfer.files) uploadFile(file)
})

loadObjects()
