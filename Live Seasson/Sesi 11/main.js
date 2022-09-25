
document.getElementById('btnChangeTitle').addEventListener('click', () => {
    // mengambil nilai yang diinputkan di id userInput ke variabel user_input
    const user_input = document.getElementById('userInput').value
    // mengubah nilai tag title dengan nilai yang sudah ditampung oleh variabel user_input
    document.querySelector('title').innerText = user_input
    // mengubah nilai id tittleDisplay dengan nilai yang sudah ditampung oleh variabel user_input
    document.querySelector('#tittleDisplay').innerHTML = user_input
})