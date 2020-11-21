export class User {
    
    private id: number;
    private username: string;
    private email: string;
    private password: string;
    private role: string[];

    static parse(args: any): User {
        return Object.assign(new User(), args);
    }

}
