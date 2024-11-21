// Vérifie le nombre de jour max en fonction du mois
const maxDaysInMonth = (month, year) => {
    switch(month){
        case '04':
        case '06':
        case '09':
        case '11':
            return '30'
        case '02': // determine si l'année est bisextile
            return (year % 4 === 0 && year % 100 !==0) || (year % 400 === 0) ? '29' : '28';
        default:
            return '31'
    }
}

const isValidate = string => {
    
    let date = string;
    let split = date.split('/'); // Séparer les jours, mois, années 
    let day = split[0]; // Récupère le jour
    let month = split[1]; // Récupère le mois 
    let year = split[2]; // Récupère l'année

    if (month < 1 || month > 12){
        return false
    };

    if(day < 1 || day > maxDaysInMonth(month, year)){ // condition pour les jours
        return false
    };

    if (year < 1000 || year > 9999){
        return false
    };

    return true;

}
/*
const isPalindrome = string => {
    let date = string.split('/')
    console.log(date)

    let reversed = date.reverse();
    console.log(reversed)
    
    if(date === reversed){
        console.log(`${date} est un palindrome`)
    } else {
        console.log(`${date} n'est pas un palindrome`)
    }
}

isPalindrome('12/09/1995')
*/




