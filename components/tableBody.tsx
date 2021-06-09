import React from 'react'
import { ItemWrapper, BoxNum, BoxName, BoxTotal } from '../styles'

interface ITableBody{
    onClick: () => void;
    el: IDataInter;
}

interface IDataInter {
    ID: string;
    strNum: number;
    Country: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export const TableBody = (props: ITableBody) => {
    return(
        <>
        <ItemWrapper onClick={props.onClick} key={props.el.ID}>
          <ItemWrapper>
            <BoxNum>{props.el.strNum}</BoxNum>
            <BoxName>{props.el.Country}</BoxName>
            <BoxTotal>{props.el.TotalConfirmed}</BoxTotal>
          </ItemWrapper>
        </ItemWrapper>
        </>
    )
} 