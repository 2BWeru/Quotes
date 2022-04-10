export class QuoteClass {
    public about!:string;
    public name! : string;
    public aurthor!:string;

constructor(about: string, name:string, aurthor: string) {
    this.about = about;
    this.name = name;
    this.aurthor = aurthor;
  }
  getAbout(): string {
    return `${this.about}`;
  }
  getName(): string {
    return `${this.name}`;
  }
  getAurthor(): string {
    return `${this.aurthor}`;


}
