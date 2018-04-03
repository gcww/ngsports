export class User {
    constructor(
        public username: string,
        public password: string,
        public phone: string,
        public birthday: Date,
        public email: string,
        public id?: string
    ){}
}
