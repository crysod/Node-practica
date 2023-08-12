function sum(a, b){
    return a + b
}

//CommonJS Module Export
/*module.exports = sum*/ //Forma comun de exportar

module.exports = { //Forma recomendada de exportar
    sum
}