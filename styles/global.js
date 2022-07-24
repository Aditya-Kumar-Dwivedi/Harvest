//its me aadi
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 20,

    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    // input styles for review form 
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    // for errors in the review form
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
    
})

export const images = {
    ratings: {
        // it is an object keeoing the ratings for all the keys which further helps us in displaying rating images
      '1': require('../assets/pic1.jpg'),
      '2': require('../assets/pic2.jpg'),
      '3': require('../assets/pic3.jpg'),
      '4': require('../assets/pic4.jpg'),
      '5': require('../assets/pic5.jpg'),
      '6': require('../assets/pic6.jpg'),
    }
};