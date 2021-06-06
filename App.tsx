import React from "react";
import useMainState from "./useMainState";
import { MakeCenter, 
  Head, 
  Img,
  GlobalBox,
  GlobalInfo,
  GlobalInfoBtn,
  Search, 
  BoxNum,
  BoxName, 
  BoxTotal,
  ModalInfoBox, 
  ModalInfoBoxTotal,
  ModalWrapper, 
  CloseButton, 
  HeaderNum,
  HeaderName, 
  HeaderTotal, 
  ItemWrapper }
  from './styles'

function App() {
  //use hook
  const {
    state,
    filteredArr,
    onChange,
    onSelectCountry,
    onToggleModal,
    onToggleModalTotal,
    onFilter,
  } = useMainState();

  if (state.isLoaded) {
    return (
      <p>loading...
        {console.error()}
      </p>
    ) 
  }
  return (
  <><MakeCenter>
    <Head>
      <GlobalBox>
        <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc">
          <Img src="https://image.flaticon.com/icons/png/128/2746/2746582.png"/>
        </a>
      
        <GlobalInfoBtn onClick={onToggleModalTotal}>Click here to view COVID19 total statistic</GlobalInfoBtn>
        {state.isGetInfoTotal && (
        <ModalWrapper>
          <ModalInfoBoxTotal>
            <Img src="https://images.vexels.com/media/users/3/193295/isolated/lists/70b06d5888de4fa09d2e3bed5c992311-covid-19-earth-cartoon-icon.png" />
            <GlobalInfo>Date: {state.total.Date}</GlobalInfo>
            <GlobalInfo>NewConfirmed: {state.total.NewConfirmed}</GlobalInfo>
            <GlobalInfo>NewDeaths: {state.total.NewDeaths}</GlobalInfo>
            <GlobalInfo>NewRecovered: {state.total.NewRecovered}</GlobalInfo>
            <GlobalInfo>TotalConfirmed: {state.total.TotalConfirmed}</GlobalInfo>
            <GlobalInfo>TotalDeaths: {state.total.TotalDeaths}</GlobalInfo>
            <GlobalInfo>TotalRecovered: {state.total.TotalRecovered}</GlobalInfo>
            <CloseButton onClick={onToggleModalTotal}>X</CloseButton>
          </ModalInfoBoxTotal>
        </ModalWrapper>
        )}
        <Search onChange={onChange}
            value={state.input}
            placeholder="Search country..."></Search>
      </GlobalBox>
    </Head>
    <ItemWrapper>
      <HeaderNum onClick={onFilter} id="strNum">№</HeaderNum>
      <HeaderName onClick={onFilter} id="Country">Country</HeaderName>
      <HeaderTotal onClick={onFilter} id="TotalConfirmed">Confirmed</HeaderTotal>
    </ItemWrapper>
        
    {filteredArr.map((el: any) => {
      const onClick = () => {
        onSelectCountry(el);
        onToggleModal();
      };
      if(!state.isLoaded){
        <p>API not response</p>
      }
      return (
        <ItemWrapper onClick={onClick} key={el.ID}>
          <ItemWrapper>
            <BoxNum>{el.strNum}</BoxNum>
            <BoxName>{el.Country}</BoxName>
            <BoxTotal>{el.TotalConfirmed}</BoxTotal>
          </ItemWrapper>
        </ItemWrapper>
      );
    })}

    {state.isGetInfo && (
      <ModalWrapper>
        <ModalInfoBox>
          <h1>{state.selected.Country}</h1>
          <p>Confirmed {state.selected.TotalConfirmed}</p>
          <p>Death {state.selected.TotalDeaths}</p>
          <p>Recovered {state.selected.TotalRecovered}</p>
          <CloseButton onClick={onToggleModal}>X</CloseButton>
        </ModalInfoBox>
      </ModalWrapper>
    )}
  </MakeCenter></>
  );//return
}
export default App;