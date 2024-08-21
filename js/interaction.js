function changeSupplier() {
    const supplier = document.getElementById("container-supplier");
    const client = document.getElementById("container-client");
    supplier.style.display = "flex";
    client.style.display = "none";
}


function changeClient() {
    const supplier = document.getElementById("container-supplier");
    const client = document.getElementById("container-client");
    supplier.style.display = "none";
    client.style.display = "flex";
}

function newSupplier() {
    window.location.href= "/html/j.html" 

}
