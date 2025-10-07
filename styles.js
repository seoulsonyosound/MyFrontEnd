import { StyleSheet } from 'react-native';
export const BUTTON_COLOR = "#A020F0";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBC3E3',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },


  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#A020F0',
    marginBottom: 10,
    textTransform: 'uppercase',
  },


  buttonContainer: {
    marginTop: 20,
    width: '40%',
    minWidth: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },


  homepageImage: {
    width: 170,
    height: 170,
    alignSelf: 'center',
},

   pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#A020F0',
    marginBottom: 10,
    textTransform: 'uppercase',
  },


  formTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#A020F0',
    marginBottom: 20,
  },


  input: {
    width: '30%',
    minWidth: 250,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
 
  button: {
    width: '100%',
    minWidth: 250,
    height: 50,
    backgroundColor: BUTTON_COLOR,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },


  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },


   reviewContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
    maxWidth: 400,
    marginBottom: 20,
  },


  reviewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcfff',
  },


  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },


  value: {
    fontSize: 16,
    color: '#666',
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e3c72',
    textAlign: 'center',
    marginBottom: 20,
},
listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
},
userCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#A020F0',
},
label: {
    fontWeight: 'bold',
    color: '#555',
},
detailText: {
    fontSize: 16,
    marginBottom: 3,
    color: '#333',
},
emailText: {
    fontSize: 14,
    color: '#A020F0',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 5,
}
});

export default styles;

