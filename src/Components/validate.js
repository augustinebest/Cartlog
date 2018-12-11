export default(type, value) => {
    var fullnameRegex = /^([A-z]+) ([A-z]+)$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var phoneRegex = /^([+])([0-9]{9,14})$/;
    var passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    var otpRegex = /(\S{7})/;
    var linkRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    var generalRegex = /(\S+)/;
    var businessRegex = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var priceRegex = /^[1-9]\d{0,7}(?:\.\d{1,4})?$/;


    if (type === 'fullname') {

        if (fullnameRegex.test(value)) return true;
        return false;

    }
    else if (type === 'email') {

        if (emailRegex.test(value)) return true;
        return false;
        
    }
    else if (type === 'phone') {

        if (phoneRegex.test(value)) return true;
        return false;
        
    }
    else if (type === 'price') {

        if (priceRegex.test(value)) return true;
        return false;
        
    }
    else if (type === 'password') {

        if (passwordRegex.test(value)) return true;
        return false;
        
    }
    else if (type === 'otp') {

        if (otpRegex.test(value)) return true;
        return false;
        
    }
    else if (type === 'link') {

        if (linkRegex.test(value)) return true;
        return false;
        
    }
    else if (type === 'general') {

        if (generalRegex.test(value)) return true;
        return false;
        
    }     
    else if (type === 'business') {

        if (businessRegex.test(value)) return true;
        return false;
        
    }

}