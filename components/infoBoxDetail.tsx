import React from 'react'
import { ModalWrapper, ModalInfoBox, CloseButton } from '../styles'
import { IDataInter} from '../interface/dataInterface'
interface IInfoBoxDetail{
    onToggleModal: () => void;
    selected: IDataInter;
}

export const InfoBoxDetail = (props: IInfoBoxDetail) => {
    return(
        <>
        <ModalWrapper>
            <ModalInfoBox>
            <h1>{props.selected.Country}</h1>
            <p>Confirmed {props.selected.TotalConfirmed}</p>
            <p>Death {props.selected.TotalDeaths}</p>
            <p>Recovered {props.selected.TotalRecovered}</p>
            <CloseButton onClick={props.onToggleModal}>X</CloseButton>
            </ModalInfoBox>
        </ModalWrapper>
        </>
    )
}