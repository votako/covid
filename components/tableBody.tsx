import React from 'react'
import { ItemWrapper, BoxNum, BoxName, BoxTotal } from '../styles'
import { DataInter } from '../interface/dataInterface'

interface TableBody{
    onClick: () => void;
    el: DataInter;
}

export const TableBody = (props: TableBody) => {
    return(
        <>
        <ItemWrapper onClick={props.onClick} key={props.el.ID}>
          <ItemWrapper>
            <BoxNum>{props.el.strNum}</BoxNum>
            <BoxName>{props.el.Country}</BoxName>
            <BoxTotal>{props.el.totalConfirmed}</BoxTotal>
          </ItemWrapper>
        </ItemWrapper>
        </>
    )
} 