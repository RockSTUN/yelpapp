import React from 'react';
import { Text, Image, View , StyleSheet} from 'react-native'

function Restaurant(props){
        return <View style={styles.container}>
        <Text style={styles.name} >{props.data.name}</Text>
            <Image style={styles.image} source={
                {uri: props.data.image_url}
            }/>
        <Text style={styles.rating}>{`${props.data.rating} Stars, ${props.data.review_count} Reviews`}</Text>
        </View>
    
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    container: {
        margin: 5
    }
});

export default Restaurant;
