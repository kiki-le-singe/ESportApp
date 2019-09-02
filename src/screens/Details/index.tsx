import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import PlayerDetails from 'src/components/PlayerDetails';
import Navigation from 'src/interfaces/Navigation';
import styles from '../styles/screen';

interface Props {
  navigation: Navigation;
}

export default class Details extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation }: { navigation: Navigation }) => {
    const player = navigation.getParam('player');
    const { firstname, lastname, country } = player;

    return {
      headerTitle: () => {
        return (
          <Fragment>
            <Text>{firstname} {lastname}</Text>
            <Image style={{ width: 25, height: 25 }} source={{ uri: country.picture }} />
          </Fragment>
        )
      },
    };
  };

  render() {
    const { navigation } = this.props;
    const player = navigation.getParam('player');

    return (
      <View style={styles.container}>
        <PlayerDetails player={player} />
      </View>
    );
  }
}
