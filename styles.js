import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8ece2',
    padding: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  downloadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  heroSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c6969',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#a38755',
    textAlign: 'center',
    marginVertical: 10,
  },
  discoverButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop:20,
  },
  discoverButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3c2e1f',
  },
  sectionText: {
    fontSize: 16,
    color: '#6c6969',
    marginVertical: 10,
  },
  featureBox: {
    backgroundColor: '#dedede',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  footer: {
    marginTop: 80,
    paddingVertical: 20,
    backgroundColor: '#5a5147',
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
