import React from "react";
import {useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './users.scss'

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const renderUsers= async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      setUsers(data)

    };
    renderUsers();
  }, []);

  return (
    <main className="main">
      <div className={`container`} style={{ marginTop: "75px" }}>
        <ul className="user_list row">
          {users.map((user) => (
            <li key={user.id} className='col-3 g-5 mx-5 user p-1'>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom className='user_name'>
                    name: {user.name}
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} gutterBottom className='user_email card-text'>
                    email: {user.email}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='user_address'>
                    Address: {user.address.street}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="text"
                        onClick={() => navigate(`/posts/${user.id}`)}
                      >
                        Posts
                  </Button>
                </CardActions>

              </Card>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Users;
