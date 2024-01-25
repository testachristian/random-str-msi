const mensajes = [
    "Aquí es donde todo comienza...",
    "Compromiso comprometido",
    "El control de versiones es terrible",
    "¡COMPROMETE TODOS LOS ARCHIVOS!",
    "Lo mismo que hacemos todas las noches, Pinky, intentar conquistar el mundo",
    "Bloquea las alas S en posición de ataque",
    "Este compromiso es una mentira",
    "Te lo explicaré cuando seas mayor",
    "Aquí hay dragones",
    "Reinventando la rueda. Otra vez.",
    "Este no es el mensaje de compromiso que estás buscando",
    "¡Batman! (este compromiso no tiene padres)",
  ];
  
  const commitDivertido = () => {
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    console.log(`\x1b[34m${mensaje}\x1b[89m`);
  };
  
  module.exports = { commitDivertido };
  