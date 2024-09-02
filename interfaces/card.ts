export interface ICardProps{
    header:string;
    title:string;
    body:ICardContent;
    className?:string

}
interface ICardContent {
    image?:string;
    percentage?:string
    history:string;
}