export default function platzom(str) {
    let translation = str;
    
    // Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculasa
    const reverse = (str) => str.split('').reverse().join('');    

    const minMay = str => str.split('').map((char, index) => 
        index % 2 == 0 ? char.toUpperCase() : char.toLowerCase()).join('');

    if(str == reverse(str)){
        return minMay(str)
    }

    //Si la palabra termina en "ar", se quitan esos caracteres.
    if (str.toLowerCase().endsWith('ar')){
        translation = str.slice(0, -2);
    }

    //Si la palabra inicia con Z, se añade "pe" al final
    if (str.toLowerCase().startsWith('z')){
        translation += 'pe';
    }

    //Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con guión del medio
    let translationLength = translation.length;
    if (translation.length >= 10){
        const firstHalf = translation.slice(0, Math.round(translationLength/ 2))
        const secondHalf = translation.slice(Math.round(translationLength/ 2))
        translation = `${firstHalf}-${secondHalf}`
    }    

    return translation;
}