import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import useResults from './../hooks/useResults'
//Components
import SearchBar from './../components/SearchBar';
import CostType from './../components/CostType';
function SearchScreen(props){
    const [term, setSearch] = useState('');
    const [sendReq, results, errMsg] = useResults();
    
   function separateResults(price){
//         console.log('SEPARATERESULTS: ',results)
        return  results ? results.filter((biz) => biz.price===price): [] 
    }
    
    return <>
        <Text>SEARCH SCREEN</Text>
            <SearchBar 
                s={term} 
                onSearch={(searchInput) => setSearch(searchInput)}
                onSubmit={() =>sendReq(term)}
            />
            <ScrollView>
                <CostType bizList={separateResults('$')} Cost={'Cost Effective'}/>
                <CostType bizList={separateResults('$$')} Cost = {'Bit Pricer'}/>
                <CostType bizList={separateResults('$$$$')} Cost = {'Big Spender'}/>
            </ScrollView>
    </>
}




export default SearchScreen;
