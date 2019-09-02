import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import PlayerInterface from 'src/interfaces/Player';
import Navigation from 'src/interfaces/Navigation';

interface Props {
  item: PlayerInterface;
  navigation: Navigation;
}

export class PlayerItem extends React.PureComponent<Props> {
  _goToPlayerDetails = (): void => {
    this.props.navigation.navigate('Details', { player: this.props.item });
  }

  render() {
    const { firstname, lastname, picture } = this.props.item;

    return (
      <TouchableOpacity onPress={this._goToPlayerDetails}>
        <Image style={{ width: 50, height: 50 }} source={{ uri: picture }} />
        <Text>{firstname} {lastname}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(PlayerItem);
