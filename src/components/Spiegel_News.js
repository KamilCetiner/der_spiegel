import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';


const Spiegel_News = ({news}) => {

    return(
    <View> 

        <Image
        source= {{ uri: news.link}}
        style={styles.image}
        
        />
        <Text style={styles.header}>{news.title} </Text>
        <Text style={styles.desc}>{news.description} </Text>
        
    </View>
    );
}

export {Spiegel_News};

const styles = StyleSheet.create ({
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical:10,
        marginHorizontal:10
    },
    desc: {
        fontSize:20,
        marginVertical:10,
        marginHorizontal:10
        
    },
    image: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 0.90,
        alignSelf: 'center'
    }
})