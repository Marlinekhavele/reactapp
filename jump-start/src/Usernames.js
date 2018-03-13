import React from 'react';
    export default props => (
      <ul>{props.users.map(user => <li>{user.username}</li>)}</ul>
    );