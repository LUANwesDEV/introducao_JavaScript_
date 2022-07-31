function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === "User"){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luan', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));