import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import PlayerInterface from 'src/interfaces/Player';
import PlayerItem from '../PlayerItem';

interface Props {
  data: PlayerInterface[];
}

export default class Players extends React.PureComponent<Props> {
  _keyExtractor = (item: PlayerInterface) => item.shortname;

  _renderItem = ({ item }: { item: PlayerInterface }): ReactElement => (
    <PlayerItem item={item} />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
