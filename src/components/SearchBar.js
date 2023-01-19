import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function SearchBar(props){
    return <View style={styles.viewStyle}>
        <Ionicons style={styles.iconStyle} name="search" size={25} color="black" />
        <TextInput 
            value={props.s}
            onChangeText={props.onSearch}
            style={styles.textStyle} 
            placeHolder={'SEARCH'}
            autoCapitalize = 'none'
            autoCorrect={false}
            onEndEditing={props.onSubmit}
        /> 
    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'grey',
        border: 10,
        borderColor: 'black',
        borderRadius: 50,
        height: 50,
        marginHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBotton: 10
    },
    iconStyle: {
        margin: 10,
        alignSelf: 'flex-start'
    },
    textStyle: {
        alignSelf: 'stretch',
        fontSize: 20
    }
});

export default SearchBar;
