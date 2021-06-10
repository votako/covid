import React from "react"
import { planetImg } from "../constants/const"
import { CloseButton, GlobalInfo, Img, ModalInfoBoxTotal, ModalWrapper } from "../styles"
import { DataTotal } from '../interface/dataInterface'
interface InfoBoxTotal {
    onToggleModalTotal: () => void;
    total: DataTotal;
}

export const InfoBoxTotal = (props: InfoBoxTotal) => {
    return (
        <>
        <ModalWrapper>
          <ModalInfoBoxTotal>
            <Img src={planetImg} />
            <GlobalInfo>Date: {props.total.date}</GlobalInfo>
            <GlobalInfo>NewConfirmed: {props.total.newConfirmed}</GlobalInfo>
            <GlobalInfo>NewDeaths: {props.total.newDeaths}</GlobalInfo>
            <GlobalInfo>NewRecovered: {props.total.newRecovered}</GlobalInfo>
            <GlobalInfo>TotalConfirmed: {props.total.totalConfirmed}</GlobalInfo>
            <GlobalInfo>TotalDeaths: {props.total.totalDeaths}</GlobalInfo>
            <GlobalInfo>TotalRecovered: {props.total.totalRecovered}</GlobalInfo>
            <CloseButton onClick={props.onToggleModalTotal}>X</CloseButton>
          </ModalInfoBoxTotal>
        </ModalWrapper>
        </>
    )
}