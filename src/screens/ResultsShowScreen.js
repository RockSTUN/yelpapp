import React, {useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

function ResultsShowScreen(props){
    const id = props.navigation.getParam('id');
    const [images, setImages] = useState([])
    
    function itemRender({ item }){
        return <>
            <Image style={styles.image} source={
                {
                    uri: item
                }
            }/>
        </>
    }
    
    function getImages(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ApbtQK07Zd6_pMsawGpvELiVvlLAyRCUE7GVFFXRfDca8rieDtJzUTbSwv_gQCzp7HLjeAJpxfRoszDKktNXaKeH8fYo7cQNYTHu6N_ZF6H9eRN1_PeHwssQPlGMY3Yx'
                }
            
        };

            fetch(`https://api.yelp.com/v3/businesses/${id}`, options)
            .then(response => response.json())
            .then(response => setImages(response.photos))
            .catch(err => console.error(err));
    }
    
    useEffect(getImages, [])
    
    return <View>
        <Text>Images from the search</Text>
        <FlatList
            data={images}
            keyExtractor={(result) => images.indexOf(result)}
            renderItem={itemRender}
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        borderRadius: 6,
        margin: 10
        
    }
})

export default ResultsShowScreen;
