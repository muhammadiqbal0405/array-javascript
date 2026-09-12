let todo = []
let tugas = prompt("Nama tugas: ");

todo.push(tugas);

for(let i = 1; i < todo.length; i++) {
    console.log((i + 1 ) + "." + todo[i]);   
}

console.log("Daftar Todo");

for(let i = 0; i < todo.length; i++) {
    console.log((i + 1) + "." + todo[i]);   
}