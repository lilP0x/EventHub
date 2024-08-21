import { User } from './user.js';
import { Supplier } from './supplier.js';
import { Client } from './client.js';

//Corazon de la web app, los usuarios

const users = new Map();
let numberId = 1000000;

users.set('PROV1000000',new Supplier('PROV1000000','mariaTorres','sapo@mail.com','sapo','3229118752','cll.53'));
loadUsersFromStorage();



function saveUsersToStorage() {
    localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
}

function loadUsersFromStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        const usersArray = JSON.parse(storedUsers);
        usersArray.forEach(([key, value]) => {
            users.set(key, new Supplier(value.id, value.name, value.email, value.password, value.phone, value.address));
        });
    }
}

const createSupplierForm = document.getElementById('create-supplier-form');
if (createSupplierForm) {
    createSupplierForm.addEventListener('submit', createSupplier);
}

const supplierLoginForm = document.getElementById('supplier-login-form');
if (supplierLoginForm) {
    supplierLoginForm.addEventListener('submit', loginSupplier);
}

function createSupplier(event) {
    event.preventDefault(); 
    numberId += 1; 
    const idSupplier = 'PROV' + numberId;
    const nameSupplier = document.getElementById('name-supplier').value;
    const mailSupplier = document.getElementById('mail-supplier').value;
    const phoneSupplier = document.getElementById('phone-supplier').value;
    const passwordSupplier = document.getElementById('passwordNew-supplier').value;
    const addressSupplier = document.getElementById('address-supplier').value;
    const newSupplier = new Supplier(idSupplier,nameSupplier,mailSupplier,passwordSupplier,phoneSupplier,addressSupplier);
    users.set(idSupplier,newSupplier);
    saveUsersToStorage();

    alert("user" + idSupplier);
    window.location.href = 'login.html';
}


function loginSupplier(){
    event.preventDefault(); 
    const user = document.getElementById('user').value;
    const passwordSesion = document.getElementById('password-supplier').value;
    if(users.has(user)){
        const userSesion = users.get(user);
        if(userSesion.amI(passwordSesion)){
            window.location.href = 'dashboard.html'; //cambiar a lo de juan
        }else{
            alert('Contraseña incorrecta');
        }
        
    }else{
        alert('Usuario no encontrado');
    }
}