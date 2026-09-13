let todo = []


for(let i = 1; i < 6; i++) {
    let tugas = prompt("Nama tugas: ");
    todo.push(tugas); 
}

console.log("Daftar Todo");

for(let i = 0; i < todo.length; i++) {
    console.log((i + 1) + "." + todo[i]);   
}