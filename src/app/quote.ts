export class Quote {
     id!:number;
     about!:string;
     name !: string;
    aurthor!:string;

    constructor(id: number, about: string,name:string,aurthor:string) {
        this.id = id;
        this.about = about;
        this.name = name;
        this.aurthor = aurthor;
      }  
      getName(): string {
        return `${this.name}`;
      }
      getAurthor(): string {
        return `${this.aurthor}`;
      }  
      getAbout(): string {
        return `${this.about}`;
      } 
}
