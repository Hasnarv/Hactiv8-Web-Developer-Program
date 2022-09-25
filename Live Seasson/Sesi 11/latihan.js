// memanggil id clickButton ketika button di klik
document.getElementById('clickButton').addEventListener('click', () => {
    // mengambil nilai yang diinputkan di id userInput ke variabel user_input
    const user_input = document.getElementById('userInput').value
    // mengubah nilai H1 dengan nilai yang sudah ditampung oleh variabel user_input
    document.querySelector('h1').innerText = user_input
})