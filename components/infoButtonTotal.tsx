import React from 'react'
import { GlobalInfoBtn } from '../styles'

interface InfoButtonTotal {
    onToggleModalTotal: () => void;
}

export const InfoButtonTotal = (props: InfoButtonTotal) => {
    return (
        <>
        <GlobalInfoBtn onClick={props.onToggleModalTotal}>Click here to view COVID19 total statistic</GlobalInfoBtn>
        </>
    )
} 