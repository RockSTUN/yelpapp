import React, {useState, useEffect} from 'react';
import {View, TextInput, Image, FlatList ,Text,StyleSheet, TouchableOpacity} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation'
import Restaurant from './Restaurant';

function CostType(props) {
    function itemRender({item}){
        return <TouchableOpacity onPress={() => props.navigation.navigate('ResultsShow', {id: item.id})}>
            <Restaurant data={item}/>
        </TouchableOpacity>
    }
    
        return <View style={styles.typeStyle}>
            <Text style={styles.costStyle}>{props.Cost}</Text>
            
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.bizList}
                keyExtractor={(result) => result.id}
                renderItem={itemRender}
            />
            
            <Text>LENGTH: {props.bizList.length}</Text>
            
        </View>
    
}

const styles= StyleSheet.create({
    costStyle : {
        fontSize: 18,
        fontWeight: 'bold'
    },
    typeStyle: {
        display: 'flex'
    }
})

export default withNavigation(CostType);
