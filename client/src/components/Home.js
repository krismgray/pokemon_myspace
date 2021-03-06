import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import { Card, Divider, Icon, Item} from 'semantic-ui-react';
import { Grid, Menu, Image, Dropdown } from 'semantic-ui-react';
import { setHeaders } from '../actions/headers';
import { connect } from 'react-redux';
import { Button, Comment, Form } from 'semantic-ui-react';

class Home extends Component {
  state = { profiles: [], moves: [], hearts: 0, addForm: false }

  componentDidMount() {
    axios.get('/api/profiles')
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ profiles: res.data })
      });
  }

  allMoves() {
    this.state.profiles.map
  }

  showForm() {
    this.setState({ addForm: !this.state.addForm })
  }

  addMove = (e) => {
    this.setState({ moves: this.state.moves})
  }

  render() {
    if (this.state.addform === true) {
      //display form
    } else {
      //everything underneath
    }
    return (
      <div className='background'>
      <br/>
        <Grid centered columns={2}>
          <Grid.Column width={4}>
          <Button onClick={this.showForm} />
        </Grid.Column>
        </Grid>
      <Grid centered columns={2}>
        <Grid.Column width={4}>
      <Card.Group itemsPerRow={1}>
        { this.state.profiles.map( profile =>
            <Card key={profile.id}>
              <Menu fluid vertical>
              <h2 textAlign='justified'>{profile.name}</h2>
              </Menu>
              <h3 textAlign='centered'>
                {profile.move}
              </h3>
              <h3 textAlign='centered'>
                {profile.move}
              </h3>
                <br />
                <Form>
                  <Form.Field>
                    <input placeholder='Pokedex info' />
                  </Form.Field>
                  <Button size='mini' onClick={this.addMove} type='submit'>Submit</Button>
                </Form>
                <Item>
                  <Item.Content>
                    <br />
                    <Item.Header>
                      <Icon name='like' />
                    </Item.Header>
                  </Item.Content>
                </Item>
            </Card>
          )
        }
      </Card.Group>
    </Grid.Column>
      </Grid>
    </div>
    )
  }
}


export default connect()(Home);
