import React from 'react'
import { ModalWrapper, ModalInfoBox, CloseButton } from '../styles'
import { DataInter } from '../interface/dataInterface'
interface InfoBoxDetail{
    onToggleModal: () => void;
    selected: DataInter;
}

export const InfoBoxDetail = (props: InfoBoxDetail) => {
    return(
        <>
        <ModalWrapper>
            <ModalInfoBox>
            <h1>{props.selected.Country}</h1>
            <p>Confirmed {props.selected.totalConfirmed}</p>
            <p>Death {props.selected.totalDeaths}</p>
            <p>Recovered {props.selected.totalRecovered}</p>
            <CloseButton onClick={props.onToggleModal}>X</CloseButton>
            </ModalInfoBox>
        </ModalWrapper>
        </>
    )
}