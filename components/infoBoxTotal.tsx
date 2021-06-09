import React from "react"
import { PlanetImg } from "../constants/const"
import { CloseButton, GlobalInfo, Img, ModalInfoBoxTotal, ModalWrapper } from "../styles"
import { IDataTotal } from '../interface/dataInterface'
interface IInfoBoxTotal {
    onToggleModalTotal: () => void;
    total: IDataTotal;
}

export const InfoBoxTotal = (props: IInfoBoxTotal) => {
    return (
        <>
        <ModalWrapper>
          <ModalInfoBoxTotal>
            <Img src={PlanetImg} />
            <GlobalInfo>Date: {props.total.Date}</GlobalInfo>
            <GlobalInfo>NewConfirmed: {props.total.NewConfirmed}</GlobalInfo>
            <GlobalInfo>NewDeaths: {props.total.NewDeaths}</GlobalInfo>
            <GlobalInfo>NewRecovered: {props.total.NewRecovered}</GlobalInfo>
            <GlobalInfo>TotalConfirmed: {props.total.TotalConfirmed}</GlobalInfo>
            <GlobalInfo>TotalDeaths: {props.total.TotalDeaths}</GlobalInfo>
            <GlobalInfo>TotalRecovered: {props.total.TotalRecovered}</GlobalInfo>
            <CloseButton onClick={props.onToggleModalTotal}>X</CloseButton>
          </ModalInfoBoxTotal>
        </ModalWrapper>
        </>
    )
}