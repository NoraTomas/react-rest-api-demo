import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    const response = await axios.get("http://localhost:5000/members");
    console.log("RESPONSE DATA", response.data);
    setMembers(response.data);
  };

  const deleteMember = async id => {
    await axios.delete("http://localhost:5000/members/" + id);
    const newMembers = members.filter(m => m.id != id);
    setMembers(newMembers);
  };

  return (
    <div>
      <h2>React Demo</h2>
      <h3>
        <ul>
          {members.map(m => (
            <Box boxShadow={3}>
              <ul key={m.id}>
                {m.name} {m.age}
              </ul>
              <Button
                onClick={() => deleteMember(m.id)}
                variant="contanied"
                color="secondary"
              >
                Delete
              </Button>
            </Box>
          ))}
        </ul>
      </h3>
    </div>
  );
}
