import React from 'react'
import { GlobalInfoBtn } from '../styles'

interface IInfoButtonTotal {
    onToggleModalTotal: () => void;
}

export const InfoButtonTotal = (props: IInfoButtonTotal) => {
    return (
        <>
        <GlobalInfoBtn onClick={props.onToggleModalTotal}>Click here to view COVID19 total statistic</GlobalInfoBtn>
        </>
    )
} 