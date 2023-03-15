let count = 0;

const addBtn = document.getElementById('btn-plus')
const removeBtn = document.getElementById('btn-minus')
const clearBtn = document.getElementById('btn-clear')
const showCount = document.getElementById('display-counter')

showCount.innerHTML = count

addBtn.addEventListener("click", () => {
    count++
    showCount.innerHTML = count
})

removeBtn.addEventListener("click", () => {
    count--
    showCount.innerHTML = count
})

clearBtn.addEventListener("click", () => {
    count = 0;
    showCount.innerHTML = count
})