const palindromes = function (str) {

    function reverseString(input) {
        if (input === "")
            return "";
        else
            return reverseString(input.substr(1)) + input.charAt(0);
    }

    str = str.replace(/[^a-z0-9]/gi, "");
    str = str.toLowerCase();
    if(str===reverseString(str))
        return true;
    else 
        return false;
};

// Do not edit below this line
module.exports = palindromes;
