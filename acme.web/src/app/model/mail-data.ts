export class MailData {

    public constructor(mail: string = "", name: string = "", message: string = "") {
        this.mail = mail;
        this.message = message;
        this.name = name;
    }

    public name: string;
    public mail: string;
    public message: string;
}