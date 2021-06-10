export interface DataInter {
    ID: string;
    strNum: number;
    Country: string;
    totalConfirmed: number;
    totalDeaths: number;
    totalRecovered: number;
}

export interface DataTotal {
    totalRecovered: number;
    newConfirmed: number;
    newDeaths: number;
    newRecovered: number;
    totalConfirmed: number;
    totalDeaths: number;
    date: Date;
}