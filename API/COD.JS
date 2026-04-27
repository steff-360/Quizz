
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
console.log("  identidad: { nombre: '" + usuarioFormateado.identidad.nombre + "', apellido: '" + usuarioFormateado.identidad.apellido + "' },");
console.log("  contacto: { correo: '" + usuarioFormateado.contacto.correo + "', contacto: '" + usuarioFormateado.contacto.contacto + "' },");
console.log("  ubicacion: { ciudad: '" + usuarioFormateado.ubicacion.ciudad + "', pais: '" + usuarioFormateado.ubicacion.pais + "' },");
console.log("  activo: " + usuarioFormateado.activo);
console.log("}");