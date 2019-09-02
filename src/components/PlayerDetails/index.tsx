import React from 'react';
import { View, Image, Text } from 'react-native';
import PlayerInterface from 'src/interfaces/Player';
import { gramsToKilograms, total } from 'src/utils/';

interface Props {
  player: PlayerInterface;
}

export default class PlayerDetails extends React.PureComponent<Props> {
  render() {
    const { picture, data } = this.props.player;
    const { height, weight, age, last } = data;

    return (
      <View>
        <Image style={{ width: 125, height: 200 }} source={{ uri: picture }} />
        <Text>height: {height} cm</Text>
        <Text>age: {age}</Text>
        <Text>weight: {gramsToKilograms(weight)} kg</Text>
        <Text>total wins: {total(last, 1)}</Text>
        <Text>total losses: {total(last, 0)}</Text>
      </View>
    );
  }
}
