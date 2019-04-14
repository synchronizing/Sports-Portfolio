/* Card.ts 
    ? are optional properties
    */

export interface CardInterface {
    _id?: string;
    card: Card;
    player: Player;
    images: Images;
    bought: boolean;
}

interface Card {
    set: string;
    sport: string;
    year?: string;
    condition?: string;
    setAmount?: number;
}

interface Player {
    name: string;
    team?: string;
    league?: string;
    setNumber?: number;

}

interface Images {
    front?: string;
    back?: string;
    //might need to put brackets around [other?]
    other?: [string];
}
