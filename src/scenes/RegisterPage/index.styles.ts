import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    top: 0,
    width: "100%",
    height: "70%",
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
  },
  content: {
    height: '100%',
    justifyContent: 'flex-end'
  },
  card: {
    minHeight: '50%',
    shadowColor: '#595281',
    shadowTopOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 2,
    borderRadius: 30,
    backgroundColor: '#241F44',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  cardsContainer: {
    backgroundColor: 'red',
  },

});


