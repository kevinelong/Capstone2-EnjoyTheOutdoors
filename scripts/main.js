start = Date.now()
console.log("FIRST ON PAGE", start);

window.addEventListener("load", e=>console.log("window load", Date.now() - start))
document.addEventListener("DOMContentLoaded", e=>console.log("DOM loaded", Date.now() - start))
