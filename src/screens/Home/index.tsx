import React from 'react';
import { View } from 'react-native';
import Players from 'src/components/Players';
import Player from 'src/interfaces/Player';
import Navigation from 'src/interfaces/Navigation';
import { getPlayers } from 'src/services/players';
import styles from '../styles/screen';

interface Props {
  navigation: Navigation;
}

interface State {
  data: Player[];
}

export default class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount () {
    try {
      debugger
      const players = await getPlayers();
      this.setState({ data: players });
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Players data={this.state.data} />
      </View>
    );
  }
}
