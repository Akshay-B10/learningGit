import React, { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Alert from "./components/Alert/Alert";

function App() {
  const [userList, setUserList] = useState([]);

  const [isValid, setIsValid] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  if (!isValid) {
    return (
      <Alert message={alertMessage} getForm={setIsValid} />
    );
  }

  const addUser = userData => {
    const user = {...userData};
    const newName = user.name;
    const newAge = +user.age;
    if (newName.trim() === "" || user.age.trim() === "") {
      setIsValid(false);
      setAlertMessage("Please enter a valid name or age (non empty values)");
      return;
    }
    if (!newAge || newAge <= 0) {
      setIsValid(false);
      setAlertMessage("Please enter a valid age (age > 0)");
      return;
    }

    setUserList([...userList, user]);
  }

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
