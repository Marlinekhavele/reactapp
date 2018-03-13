import React from 'react';
import axios from 'axios';
import Usernames from './Usernames';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [
        {username: 'Codebeast'},
        {username: 'Eugene'},
        {username: 'Jacky'}
      ]
    }
  }

 componentDidMount() {
   axios.get('https://api.github.com/users/christiannwamba/followers')
     .then(res => {
       const usernames = res.data.map(user => ({username: user.login}));
       console.log(usernames)
       this.setState({users: [...this.state.users, ...usernames]});
     })
 }

  addRandomUser() {
    const newUsers = ['Ganga', 'Joy', 'Karis', 'William'];
    const randomNumber = Math.floor(Math.random() * newUsers.length)
    const randomUser = newUsers[randomNumber];
    this.setState({users: [...this.state.users, {username: randomUser}]})
  }

  render() {
    return (<div>
            <Usernames users={this.state.users} />
            <button onClick={this.addRandomUser.bind(this)}>Add Random User</button>
           </div>)
  }
}
export default App;
