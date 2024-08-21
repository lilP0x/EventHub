function changeSupplier() {
    const supplier = document.getElementById("container-supplier");
    const client = document.getElementById("container-client");
    let opacity = 0.1;
    let rotate = -10;
    let rotateC = 0;
    supplier.style.display = "flex";
    client.style.display = "none";
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        rotate += 2;
        supplier.style.opacity = opacity;
        supplier.style.transform = `rotate(${rotate}deg)`;
        if (rotate >= 0 || opacity > 1) {
            supplier.style.opacity = 1;
            clearInterval(fadeIn);
            
        }
    }, 300);
}


function changeClient() {
    document.getElementById("container-supplier").style.display = "none";
    document.getElementById("container-client").style.display = "flex";
}
