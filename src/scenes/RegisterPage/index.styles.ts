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
    minHeight: '60%',
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

  statusBar: {
    height: '20%',
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  counter: {
    color: '#483E89',
    fontSize: 62,
    fontFamily: 'Lato-Black',
  },
  counterText: {
    color: '#EDEDED',
    opacity: 0.7,
    marginBottom: 10,
  },
  progressBarBack: {
    height: 8,
    width: '90%',
    backgroundColor: '#302A5B',
  },
  progressBarFront: {
    height: '100%',
    position: 'absolute',
    backgroundColor: '#9386E9'
  },

  // ACC TYPE FORM STYLES //
  form: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '125%',
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

  },
  backgroundSignature: {
    position: 'absolute',
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  error: {
    margin: 15,
    color: 'red',
  },
  banner: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    width: '90%',
    color: '#EDEDED',
    margin: 20
  },
  text: {
    fontSize: 14,
    textAlign: 'left',
    width: '80%',
    color: '#EDEDED',
    opacity: 0.7,
    marginBottom: 10
  },
  option: {
    backgroundColor: '#483E89',
    width: '90%',
    marginTop: 10,
    height: '15%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6053B6",
    flexDirection: 'row'
  },
  textContainer: {
    padding: 10,
  },
  nextButton: {
    backgroundColor: "#9386E9",
    borderRadius: 15,
    height: 50,
    margin: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextButtonText: {
    color: "#EDEDED",
    textAlign: "center",
    fontWeight: '700',
    fontSize: 17
  },

  // IMAGE
  optionImage: {
    aspectRatio: 1,
    backgroundColor: '#7868E4',
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'left',
    width: '50%',
    color: '#EDEDED',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    width: '50%',
    color: '#EDEDED',
  },
  typeSvg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '110%',
  }
});


