interface IValidator {
    // isValidEmailStr(s: string): boolean
    // isValidZipCode(s: string): boolean
    isValidStr(s: string, regex : any): boolean
}

export { IValidator };