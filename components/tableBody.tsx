import React from 'react'
import { ItemWrapper, BoxNum, BoxName, BoxTotal } from '../styles'
import {IDataInter} from '../interface/dataInterface'

interface ITableBody{
    onClick: () => void;
    el: IDataInter;
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