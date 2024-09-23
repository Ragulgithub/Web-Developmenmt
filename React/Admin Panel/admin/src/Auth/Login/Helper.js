// email validation

export function ValidateEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

}

// password validation

export function ValidatePassword(password) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password);
}

// Name Capitalize

export function capitalize(name){
        const words = name.split(" ");
        const capitalizedWords = words.map((word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
        return capitalizedWords.join(" ");            
}