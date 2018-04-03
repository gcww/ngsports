export class SportEvent {
    constructor(
        public id: string,

        public kind: string,

        public weight: number,

        public whenlong: number,

        public cycle: number,

        public name: string,

        public difficulty: number,

        public location: string
    ) {

    }
}
