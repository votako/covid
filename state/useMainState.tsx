import React, { useState, useEffect } from 'react';
import axios from "axios";
import { summaryUrl } from '../constants/const';
import { DataInter, DataTotal } from '../interface/dataInterface'
interface MainState {
    data: DataInter[];
    total: DataTotal;
    selected: DataInter;
    filteredArr: string;
    isLoaded: boolean;
    input: string;
    isGetInfo: boolean;
    isGetInfoTotal: boolean;
    sort: string;
    sorted: boolean;
}

const initalState = {
    data: [],
    total: {} as DataTotal,
    selected: {} as DataInter,
    filteredArr: "",
    isLoaded: false,
    input: "",
    isGetInfo: false,
    isGetInfoTotal: false,
    sort: "Country",
    sorted: false,
}

const useMainState = () => {
    const [state, setState] = useState<MainState>(initalState);
    useEffect(() => { getData(); }, []);
    const getData = async() => {
        try{
            const getTotal = await axios.get(summaryUrl);
            const total = await getTotal.data.Countries.map((el: DataInter, index: number) => {
                const strNum = index+1;
                return el = {...el, strNum};
            })

            setState((s) => ({
                ...s,
                data: total,
                total: getTotal.data.Global,
            }))
        }catch(error){
            console.error(error);
            alert("API not available " + error)
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
    // show\hide info
    const onToggleModalTotal = () => {
        setState((s) => ({
          ...s,
          isGetInfoTotal: !s.isGetInfoTotal,
        }));
    };
    // show\hide info
    const onToggleModal = () => {
        setState((s) => ({
          ...s,
          isGetInfo: !s.isGetInfo,
        }));
    };
    //   get info
    const onSelectCountry = (selected: DataInter) => {
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
      
    const filteredArr = state.data.sort((a: any, b: any) => {
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
        onToggleModalTotal,
    }
}

export default useMainState