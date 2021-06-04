import React, { useState, useEffect } from 'react';
import axios from "axios";

interface IMainState {
    data: IDataInter[];
    selected: IDataInter;
    filteredArr: string;
    isLoaded: boolean;
    input: string;
    isGetInfo: boolean;
    sort: string;
    sorted: boolean;
}

interface IDataInter {
    ID: string;
    strNum: number;
    Country: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

const initalState = {
    data: [],
    selected: {} as IDataInter,
    filteredArr: "",
    isLoaded: false,
    input: "",
    isGetInfo: false,
    sort: "Country",
    sorted: false,
}

const useMainState = () => {
    const [state, setState] = useState<IMainState>(initalState);
    useEffect(() => { getData(); }, []);
    const getData = async() => {
        try{
            const total = await axios.get("https://api.covid19api.com/summary");
            setState((s) => ({
                ...s,
                data: total.data.Countries,
            }))
        }catch(error){
            console.error();
            alert("API not available "+ error)
        }
    }
    //sort columns
    const onFilter = (e: React.ChangeEvent<HTMLDivElement>) => {
        const { id } = e.target;
        setState((s) => ({
            ...s,
            sort: id,
            sorted: !s.sorted
        }))
    }
    // get info
    const onToggleModal = () => {
        setState((s) => ({
          ...s,
          isGetInfo: !s.isGetInfo,
        }));
    };
    //   get info
    const onSelectCountry = (selected: IDataInter) => {
        setState((s) => ({
          ...s,
          selected,
        }));
    };
      //input for search
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState((s) => ({
            ...s,
            input: value,
        }));
    };
      
    const filteredArr = state.data.sort((a: any, b: any) => { //
        if (a[state.sort] > b[state.sort]) {return 1;}
        if (a[state.sort] < b[state.sort]) {return -1;}
        return 0;
    })//search in array
    .filter((el) =>
        el.Country.toLowerCase().includes(state.input.toLowerCase())
    );
      
    state.sorted ? filteredArr.reverse() : filteredArr
    return{
        state,
        filteredArr,
        onChange,
        onFilter,
        onSelectCountry,
        onToggleModal,
    }
}

export default useMainState