import { connect } from 'react-redux';
import App from '../components/App';
import { setGuesses } from '../actions';

const mapStateToProps = state => ({
  guesses: state.guesses,
  cities: state.cities,
});

const mapDispatchToProps = {
  setGuesses
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
