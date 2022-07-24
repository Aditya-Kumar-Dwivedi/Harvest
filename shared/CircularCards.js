// its me aadi
import React from 'react'
import { StyleSheet, View ,Dimensions,Image} from 'react-native'

export default function Card(props) {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}
            {/* by using this we can pass can pass dynamically properties like text or view from diiferent pages  */}
        </View>
    </View>
  )
}
{/* <Card>
  <Text>hello</Text>
</Card> */}
// this is a children and it can be used in card

const styles = StyleSheet.create({
    card: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        // Like box shadow
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        justifyContent:'center'
    },
    cardContent: {
        // marginHorizontal: 18,
        // marginVertical: 10,
        borderRadius:45,
        padding:5,
        
    }
})