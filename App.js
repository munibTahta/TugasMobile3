import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { Constants } from 'expo';
import { createDrawerNavigator } from 'react-navigation';
class MeterAndFeet extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Meter & kaki',
  };
  state = {
    ratio: 3.2808399,
    result: '',

    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari meter ke kaki
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari kaki ke meter
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class MileAndFeet extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Mil & kaki ',
  };
  state = {
    ratio: 5280,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari mile to feet
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari kaki ke mil
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class MeterAndYard extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi meter & yard',
  };
  state = {
    ratio: 1.0936133,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari meter ke yard
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari yard ke meter
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class MeterAndMile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Meter & mil ',
  };
  state = {
    ratio: 0.000621371192,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari meter ke mil
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />
        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari mil ke meter
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

class YardAndFeet extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Yard & kaki',
  };
  state = {
    ratio: 3,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari yard ke kaki
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari kaki ke yard
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

class RadianAndDegree extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Radian & Derajat',
  };
  state = {
    ratio: 180,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari radian ke derajat
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari derajat ke radian
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class SecondAndMinute extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Detik & menit ',
  };
  state = {
    ratio: 1 / 60,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari detik ke menit
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari menit ke detik
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class HourAndDay extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Jam & Hari',
  };
  state = {
    ratio: 1 / 24,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari jam ke hari
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari hari ke jam
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class DayToYear extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Hari & Tahun',
  };
  state = {
    ratio: 1 / 365,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari hari ke tahun
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari tahun ke hari
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class MinuteAndHour extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Menit & Jam',
  };
  state = {
    ratio: 1 / 60,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari menit ke jam
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari jam ke menit
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class GramAndPound extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Gram & Pound',
  };
  state = {
    ratio: 0.00220462,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari gram ke pound
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari pound ke gram
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class PintAndLiter extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Pint & liter',
  };
  state = {
    ratio: 0.473176,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari pint ke liter
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari liter ke pint
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class OunceAndPound extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Once & Pound',
  };
  state = {
    ratio: 0.0625,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari ounce ke pound
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari pound ke ounce
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />

        <Text>Hasilnya adalah : {this.state.result1}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
class Time extends React.Component {
  /*to customize stuff in the drawer*/
  static navigationOptions = {
    drawerLabel: 'APLIKASI KONVERSI.',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{ fontWeight: 'bold' }}>
            Pilih unit yang akan di konversi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AppHome')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class Weight extends React.Component {
  /*to customize stuff in the drawer*/
  static navigationOptions = {
    drawerLabel: 'APLIKASI KONVERSI.',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{ fontWeight: 'bold' }}>
            Pilih unit masa yang akan di konversi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AppHome')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class Length extends React.Component {
  /*to customize stuff in the drawer*/
  static navigationOptions = {
    drawerLabel: 'APLIKASI KONVERSI.',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{ fontWeight: 'bold' }}>
            Pilih unit panjang yang akan di konversi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AppHome')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class Angle extends React.Component {
  /*to customize stuff in the drawer*/
  static navigationOptions = {
    drawerLabel: 'APLIKASI KONVERSI.',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{ fontWeight: 'bold' }}>
            Pilih unit sudut yang akan di konversi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AppHome')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class QuartAndLiter extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Seperempat & liter',
  };
  state = {
    ratio: 0.946353,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari seperempat ke liter
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari liter ke seperempat
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
        <Text>Hasilnya adalah : {this.state.result1}</Text>
      </KeyboardAvoidingView>
    );
  }
}
class Volume extends React.Component {
  /*to customize stuff in the drawer*/
  static navigationOptions = {
    drawerLabel: 'APLIKASI KONVERSI.',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{ fontWeight: 'bold' }}>
            Pilih unit volume yang akan di konversi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AppHome')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class App extends React.Component {
  /*to customize stuff in the drawer*/
  static navigationOptions = {
    drawerLabel: 'APLIKASI KONVERSI.',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{ fontWeight: 'bold' }}>
            Pilih jenis unit yang akan di konversi{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class GallonAndLiter extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Konversi Gallon & liter',
  };
  state = {
    ratio: 3.78541200014701,
    result: '',
    currentInput: '',
    result1: '',
    currentInput1: '',
  };

  textInputChange = userInput => {
    this.setState({ currentInput: userInput });
  };
  finishedTyping = () => {
    let x = Number(this.state.currentInput) * this.state.ratio;
    this.setState({ result: x });
  };
  textInputChange1 = userInput => {
    this.setState({ currentInput1: userInput });
  };
  finishedTyping1 = () => {
    let x = Number(this.state.currentInput1) / this.state.ratio;
    this.setState({ result1: x });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari gallon ke liter
        </Text>
        <TextInput
          onChangeText={this.textInputChange}
          onSubmitEditing={this.finishedTyping}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
        <Text>Hasilnya adalah : {this.state.result}</Text>
        <Text style={styles.paragraph}>
          Silahkan masukan jumlah angka dari liter ke gallon
        </Text>
        <TextInput
          onChangeText={this.textInputChange1}
          onSubmitEditing={this.finishedTyping1}
          keyboardType={'default'}
          placeholder={'masukan angka . . .'}
          selectTextOnFocus={true}
          clearTextOnFocus={true}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>KEMBALI KE MENU UTAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Menu pilihan</Text>
        </TouchableOpacity>
        <Text>Hasilnya adalah : {this.state.result1}</Text>
      </KeyboardAvoidingView>
    );
  }
}
const LengthMeasurement = createDrawerNavigator({
  Home: {
    screen: Length,
  },
  First: {
    screen: MeterAndFeet,
  },
  Second: {
    screen: MeterAndMile,
  },
  Third: {
    screen: MeterAndYard,
  },
  Fourth: { screen: YardAndFeet },
  Fifth: { screen: MileAndFeet },
});
const VolumeMeasurement = createDrawerNavigator({
  Home: {
    screen: Volume,
  },
  First: {
    screen: PintAndLiter,
  },
  Second: {
    screen: QuartAndLiter,
  },
  Third: {
    screen: GallonAndLiter,
  },
});
const TimeMeasurement = createDrawerNavigator({
  Home: {
    screen: Time,
  },
  First: {
    screen: SecondAndMinute,
  },
  Second: {
    screen: MinuteAndHour,
  },
  Third: {
    screen: HourAndDay,
  },
  Fourth: {
    screen: DayToYear,
  },
});
const WeightMeasurement = createDrawerNavigator({
  Home: {
    screen: Weight,
  },
  First: {
    screen: GramAndPound,
  },
  Second: {
    screen: OunceAndPound,
  },
});
const AngleMeasurement = createDrawerNavigator({
  Home: {
    screen: Angle,
  },
  First: {
    screen: RadianAndDegree,
  },
});
export default createDrawerNavigator(
  {
    AppHome: {
      screen: App,
    },
    Pajang: LengthMeasurement,
    Masa: WeightMeasurement,
    Sudut: AngleMeasurement,
    Waktu: TimeMeasurement,
    Volume: VolumeMeasurement,
  },
  {
    drawerWidth: 150,
  }
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fab1a0',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
