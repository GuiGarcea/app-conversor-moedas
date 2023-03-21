import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 30
    },
    input:{
      height: 35,
      borderWidth: 1,
      borderColor: '#222',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      fontSize: 14,
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
      padding: 10,
      marginTop: 5
    },
    titulo:{
      fontSize: 18,
      color: 'orange',
      alignSelf: 'center',
      marginTop: 15
    },
    imagem:{
      width: 200,
      height: 100,
      alignSelf: 'center',
      marginTop: 10
    },
    label:{
      margin: 5,
      fontSize: 12,
      marginLeft: 15,
    },
    limite:{
      margin: 5,
      fontSize: 12,
      marginLeft: 15,
      alignSelf: 'center'
    }
  });


  export {styles};