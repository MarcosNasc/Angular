export class Item {
    public id : number = 0 ;
    public img? : string ;
    public title? : string;
    public description? : string;
    public show? : boolean ;

    constructor(id: number,img: string = "", title?: string, description?: string, show?:boolean){

    }
    
}