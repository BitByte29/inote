import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const host = "http://localhost:3001";
  const defaultAuth =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDczM2M3NjBmOWE1NDk0OTBiOGVmIn0sImlhdCI6MTY5NDY2NTMwOX0.4xcvVCCj7PI7oizzZb2FJJSxXlfAK1KEDQsj1RDP3hQ";
  const [token, setToken] = useState(defaultAuth);

  return (
    <UserContext.Provider value={{ token }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
