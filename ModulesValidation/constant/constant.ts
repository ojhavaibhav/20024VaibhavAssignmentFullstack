export class Constants {
    public static emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    public static numberRegex = /^[0-9]{6}$/;
    public static FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
    public static FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
    public static BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
    public static PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;

    public static EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
    public static ConNoRegEx = /^([0-9]{10})$/;
    public static AgeRegEx = /^([0-9]{1,2})$/;
    public static AadhaarNoRegEx = /^([0-9]{12})$/;
}