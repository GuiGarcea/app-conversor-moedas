import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      valor: 0,
      origem: 'R',
      destino: 'R',
      resultado: ''
    };
    this.converter = this.converter.bind(this);
  }
 
  converter(){
    res = 0

    if ((this.state.origem == 'D') && (this.state.destino == 'D'))
      res = this.state.valor * 1
    else if ((this.state.origem == 'D') && (this.state.destino == 'R'))
      res = this.state.valor * 5.24
    else if ((this.state.origem == 'D') && (this.state.destino == 'E'))
      res = this.state.valor * 0.93
    else if ((this.state.origem == 'R') && (this.state.destino == 'R'))
      res = this.state.valor * 1
    else if ((this.state.origem == 'R') && (this.state.destino == 'D'))
      res = this.state.valor / 5.24
    else if ((this.state.origem == 'R') && (this.state.destino == 'E'))
      res = this.state.valor / 5.61
    else if ((this.state.origem == 'E') && (this.state.destino == 'E'))
      res = this.state.valor * 1
    else if ((this.state.origem == 'E') && (this.state.destino == 'D'))
      res = this.state.valor * 1.07
    else if ((this.state.origem == 'E') && (this.state.destino == 'R'))
      res = this.state.valor * 5.61

    this.setState({
      resultado: 'Resultado: ' + res.toFixed(2)
    });
  }
 
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.titulo}>Conversor de Moedas</Text>

          <Text style={styles.label}>Valor</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(v) => this.setState({valor: v})}
          />

          <Text style={styles.label}>De</Text>
          <Picker
            selectedValue={this.state.origem}
            onValueChange={ (itemValue, itemIndex) => this.setState({origem: itemValue}) }
          >
            <Picker.Item key={1} value='D' label="Dólar" />
            <Picker.Item key={2} value='R' label="Real" />
            <Picker.Item key={3} value='E' label="Euro" />
          </Picker>

          <Text style={styles.label}>Para</Text>
          <Picker
            selectedValue={this.state.destino}
            onValueChange={ (itemValue, itemIndex) => this.setState({destino: itemValue}) }
          >
            <Picker.Item key={1} value='D' label="Dólar" />
            <Picker.Item key={2} value='R' label="Real" />
            <Picker.Item key={3} value='E' label="Euro" />
          </Picker>

          <Button title="Converter" onPress={this.converter} />
    
          <Text style={styles.texto}> {this.state.resultado} </Text>
        </View>
      </ScrollView>
    );
  }
}
 
export default App;