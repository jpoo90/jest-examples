import React, { Component } from 'react';
import glamorous, { ThemeProvider } from 'glamorous';

const SeasonsWrapper = glamorous.div({
  fontSize: 30,
  textAlign: 'center',
  fontFamily: 'helvetica neue',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-between'
});

const Activity = glamorous.li({
  listStyle: 'none'
});

const SeasonTitle = glamorous.div({
  fontSize: 40,
  margin: '20px 0',
  color: '#000'
});

const SeasonItem = glamorous.div({
  borderBottom: '1px dashed gray'
});

const NoActivitiesMsg = glamorous.div({
  margin: '10px 0'
});

class Seasons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winter: {
        logo: '❄️',
        activities: ['⛄', '⛷️']
      },
      spring: {
        logo: '🌱',
        activities: ['👩‍🌾', '🌻']
      },
      summer: {
        logo: '☀️',
        activities: []
        // activities: ['😎']
      },
      autumn: {
        logo: '🍂',
        activities: []
      }
    };
  }

  renderSeason(key) {
    return (
      <SeasonItem key={key}>
        <SeasonTitle>
          {`${key.toUpperCase()} ${this.state[key].logo}`}
        </SeasonTitle>
        {this.renderSeasonActivities(key)}
      </SeasonItem>
    );
  }

  renderSeasonActivities(key) {
    if (this.state[key].activities.length) {
      const list = this.state[key].activities.map((activity, index) => (
        <Activity key={index}>
          {activity}
        </Activity>
      ));

      return (
        <ul>
          {list}
        </ul>
      );
    } else {
      return <NoActivitiesMsg>Activities coming soon ...</NoActivitiesMsg>;
    }
  }

  render() {
    return (
      <SeasonsWrapper>
        {Object.keys(this.state).map(this.renderSeason.bind(this))}
      </SeasonsWrapper>
    );
  }
}

export default Seasons;
