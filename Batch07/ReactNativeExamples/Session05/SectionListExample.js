import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const data = [
  {
    title: 'D',
    data: ['Devin', 'David'],
  },
  {
    title: 'J',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },
];

export default class SectionListExamples extends Component {
  renderItem = ({item}) => <Text style={styles.item}>{item}</Text>;

  renderSectionHeader = ({section}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={data}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => 'person-' + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
