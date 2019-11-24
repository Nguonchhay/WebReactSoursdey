/**
 * Restrict input to accept only number base on ascii code: https://www.w3schools.com/charsets/ref_html_ascii.asp
 * Ex: onkeypress="return isNumberKey(event)"
 * 
 * @param {*} evt 
 */
function isNumberKey(evt) {
    // window.event is safer, thanks @ThiefMaster
    var e = evt || window.event;
    var charCode = e.which || e.keyCode;                        
    if (charCode > 31 && (charCode < 47 || charCode > 57)) {
        return false;
    }

    return e.shiftKey ? false : true;
}