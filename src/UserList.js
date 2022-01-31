import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const UserList = () => {
  const [userlist, setuserlist] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((e) => setuserlist(e.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="caard">
      {userlist.map((el) => (
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title className="info">{el.name}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ textAlign: "center" }}
            >
              {el.username}
            </Card.Subtitle>
            <Card.Text className="info">
              Address: {el.address.street}/{el.address.city}/
              {el.address.zipcode}
            </Card.Text>
            <Card.Link href="#" className="info">
              {el.email}
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
