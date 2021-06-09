import React from "react";
import useMainState from "./state/useMainState";
import { InfoBoxTotal } from "./components/infoBoxTotal"
import { InfoButtonTotal } from "./components/infoButtonTotal";
import { TableHeader } from "./components/tableHeader";
import { TableBody } from "./components/tableBody";
import { InfoBoxDetail } from "./components/infoBoxDetail";
import { MakeCenter, Head, Img, GlobalBox, Search } from './styles'
import { CovidImg } from './constants/const'
import {IDataInter} from './interface/dataInterface'

function App() {
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
        <Img src={CovidImg}/>
        <InfoButtonTotal 
          onToggleModalTotal={onToggleModalTotal} 
        />
        {state.isGetInfoTotal && ( 
          <InfoBoxTotal
            onToggleModalTotal={onToggleModalTotal}
            total={state.total}
          />
        )}
        <Search onChange={onChange}
            value={state.input}
            placeholder="Search country..."
        />
      </GlobalBox>
    </Head>
    <TableHeader
      onFilter={onFilter}
    />
    {filteredArr.map((el: IDataInter) => {
      const onClick = () => {
        onSelectCountry(el);
        onToggleModal();
      };
      if(!state.isLoaded){
        <p>API not response</p>
      }
      return (
        <TableBody
          key={el.ID}
          onClick={onClick}
          el={el}
        />
      );
    })}
    {state.isGetInfo && (
      <InfoBoxDetail
        onToggleModal={onToggleModal}
        selected={state.selected}
      />
    )}
  </MakeCenter></>
  );//return
}
export default App;