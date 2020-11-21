export class DigitalDocument {

    id: string;
    description: string;
    data: string;
    userIdOwner: string;
    typeDoc: string = "DocsCreated";
    signature = {};
    //users: string[] = [];

    static signatureConvert(signature: any): any{
        return JSON.stringify(signature)
    }
    static parse(args: any): DigitalDocument{
        return Object.assign(new DigitalDocument(), args)
    }

    toString(): void {
        console.log(`${this.description} - ${this.data} - ${this.userIdOwner} - ${this.signature}`)
    }
}
