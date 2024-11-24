// Vérifie le nombre de jour max en fonction du mois
const maxDaysInMonth = (month, year) => {
    switch (month) {
        case '04':
        case '06':
        case '09':
        case '11':
            return '30'
        case '02': // determine si l'année est bisextile
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? '29' : '28';
        default:
            return '31'
    };
};

// Detecte les palindromes
const isPalindrome = string => {
    let characters = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversed = characters.split('').reverse().join(''); // inverser la chaine de caratère

    return characters === reversed;
};

isPalindrome('Kayak')

const isDatePalindrome = string => {

    let date = string;
    let split = date.split('/'); // Séparer les jours, mois, années 
    let day = split[0]; // Récupère le jour
    let month = split[1]; // Récupère le mois 
    let year = split[2]; // Récupère l'année

    if (month < 1 || month > 12) {
        return false
    };

    if (day < 1 || day > maxDaysInMonth(month, year)) { // condition pour les jours
        return false
    };

    if (year < 1000 || year > 9999) {
        return false
    };

    return isPalindrome(date.split('/').join(''));

};

// detecter les palindrome à partir de la date d'aujourd'hui
const getNextPalindromes = x => {
    let value = x;
    let currentDate = new Date();
    let palindromes = [];

    while (palindromes.length < value) {
        currentDate.setDate(currentDate.getDate() + 1);
        let next = formatDate(currentDate)
        if (isPalindrome(next)) {
            palindromes.push(next)
        }
    }
    return palindromes
};

// convertir currentDate en string
const formatDate = date => {
    let day = String(date.getDate()).padStart(2, '0'); 
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois vont de 0 à 11 
    let year = date.getFullYear(); 
    return `${day}/${month}/${year}`;
}

getNextPalindromes(12)



