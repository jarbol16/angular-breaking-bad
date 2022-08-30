export interface Character {
    char_id: number;
    category: string;
    name: string;
    nickname: string;
    img: string;
    occupation: Ocupation[];
}

export interface Ocupation {
    name: string;
}