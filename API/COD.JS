console.log("Ejercicio Usuario");

const entradaUsuario = {
  nombre: "Ana",
  apellido: "López",
  email: "ana@email.com",
  telefono: "3001234567",
  ciudad: "Bogotá",
  pais: "Colombia",
  activo: true
};

const {
  nombre,
  apellido,
  email: correo,
  telefono: contacto,
  ciudad,
  pais,
  activo
} = entradaUsuario;

const usuarioFormateado = {
  identidad: { ...{ nombre, apellido } },
  contacto: { ...{ correo, contacto } },
  ubicacion: { ...{ ciudad, pais } },
  activo
};

console.log("{");
console.log("  identidad: { nombre: 'Ana', apellido: 'López' },");
console.log("  contacto: { correo: 'ana@email.com', contacto: '3001234567' },");
console.log("  ubicacion: { ciudad: 'Bogotá', pais: 'Colombia' },");
console.log("  activo: true");
console.log("}");