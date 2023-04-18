export interface Candidate {
    name: string;
    score: number;
}

export interface GameCategory {
    name: string;
    id: number;
    finisheds?: number[];
}