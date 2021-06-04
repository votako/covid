import React from "react";
import useMainState from "./useMainState";
import {MakeCenter, Head, Search, BoxName, BoxTotal, Wrapper,  ModalInfoBox, ModalWrapper, CloseButton, HeaderName, HeaderTotal, ItemWrapper } from './styles'

function App() {
  //use hook
  const {
    state,
    filteredArr,
    onChange,
    onSelectCountry,
    onToggleModal,
    onFilter,
  } = useMainState();

  if (state.isLoaded) {
    return <p>loading...</p>;
  }
    //first return for get all
  return (
    <div className="App">
      <Wrapper>
        <MakeCenter>
        <Head>
          <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc">
          <img width="70px" height="70px" src="https://image.flaticon.com/icons/png/128/2746/2746582.png"/>
          </a>
          <Search onChange={onChange}
            value={state.input}
            placeholder="Search..."></Search>
        </Head>
        <ItemWrapper>
          <HeaderName onClick={onFilter} id="Country">Country</HeaderName>
          <HeaderTotal onClick={onFilter} id="TotalConfirmed">Confirmed</HeaderTotal>
        </ItemWrapper>
        
        {//spread array for display data
        //add onClick for each row
        filteredArr.map((el: any) => {
          const onClick = () => {
            onSelectCountry(el);
            onToggleModal();
          };
          //second return for display spreaded data
          return (
            <ItemWrapper onClick={onClick} key={el.ID}>
              <ItemWrapper>
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
              <CloseButton onClick={onToggleModal}>close</CloseButton>
            </ModalInfoBox>
          </ModalWrapper>
        )}
        </MakeCenter>
        </Wrapper>
    </div>
  );
}
export default App;