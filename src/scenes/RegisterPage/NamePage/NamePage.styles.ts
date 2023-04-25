import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    heght: '100%',
    alignItems: 'center'
  },
  error: {
    margin: 15,
    color: 'red',
  },
  title: {
    width: '90%',
    color: '#EDEDED',
    opacity: 0.7
  },
  input: {
    backgroundColor: "transparent",
    width: '90%',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#483E89',
    borderRadius: 12,
    padding: 12,
    color: '#EDEDED',
    paddingLeft: 50,
  },
  icon: {
    marginHorizontal: 10,
    position: "absolute",
    bottom: 10,
    left: 20
  }

});