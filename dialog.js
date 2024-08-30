document.getElementById("showDialog").addEventListener('click', () =>{
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
});

document.getElementById("closeDialog").addEventListener('click', () =>{
    const dialog = document.getElementById("myDialog");
    dialog.close();
});