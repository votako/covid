export interface IDataInter {
    ID: string;
    strNum: number;
    Country: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export interface IDataTotal {
    TotalRecovered: number;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    Date: Date;
}