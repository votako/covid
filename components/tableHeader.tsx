import React from 'react'
import { ItemWrapper, HeaderNum, HeaderName, HeaderTotal } from '../styles'

interface ITableHeader {
    onFilter: () => React.ChangeEvent<HTMLDivElement>;
}

export const TableHeader = (props: ITableHeader) => {
    return (
        <><ItemWrapper>
            <HeaderNum onClick={props.onFilter} id="strNum">№</HeaderNum>
            <HeaderName onClick={props.onFilter} id="Country">Country</HeaderName>
            <HeaderTotal onClick={props.onFilter} id="TotalConfirmed">Confirmed</HeaderTotal>
        </ItemWrapper></>
    )
}