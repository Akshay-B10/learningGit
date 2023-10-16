import React, { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Alert from "./components/Alert/Alert";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);

  const [isValid, setIsValid] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  // if (!isValid) {
  //   return (
  //     <div className="App">
  //       <Alert message={alertMessage} getForm={setIsValid} />
  //     </div>
  //   );
  // }

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
    <div className="App">
      {!isValid && <Alert message={alertMessage} getForm={setIsValid} />}
      <UserForm addUser={addUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
