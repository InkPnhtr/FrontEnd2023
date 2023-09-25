function palabraMasLarga(frase) {
  
    const palabras = frase.split(' ');
    
   
    let palabraMasLarga = '';
  
      for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];
      
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
  
   
    return palabraMasLarga;
  }