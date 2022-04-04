import { IValidator } from '../interface/interface_module'
import { Constants } from '../constant/constant'

class ValidatorCLS implements IValidator {
    // isValidEmailStr(s: string): boolean {
    //     return Constants.emailRegex.test(s);
    // }

    // isValidZipCode(s: string): boolean {
    //     return s.length === 6 && Constants.numberRegex.test(s);
    // }

    isValidStr(s: string, regex : any): boolean {
        
        var myRegex = regex;
        return myRegex.test(s);
    }
}

export { ValidatorCLS };