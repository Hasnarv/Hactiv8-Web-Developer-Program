function onChangeName(event){
    input_nama = event.target.value
}
function onChangeRole(event){
    input_role = event.target.value
}
function onChangeAvailability(event){
    input_availability = event.target.value
}
function onChangeUsia(event){
    input_usia = event.target.value
}
function onChangeLokasi(event){
    input_lokasi = event.target.value
}
function onChangeExperience(event){
    input_experience = event.target.value
}
function onChangeEmail(event){
    input_email = event.target.value
}
function onButtonClick(){
    document.getElementById("nama").innerText = input_nama
    document.getElementById("role").innerText = input_role
    document.getElementById("availability").innerText = input_availability
    document.getElementById("usia").innerText = input_usia
    document.getElementById("lokasi").innerText = input_lokasi
    document.getElementById("experience").innerText = input_experience
    document.getElementById("email").innerText = input_email
}
