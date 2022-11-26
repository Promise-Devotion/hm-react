import { useEffect, useState } from "react";
import queryUser from "../../api/user";

export default function HttpDemo(params) {
  const getUser = async () => {
    const data = await queryUser({ name: "jim" });
    setUserOne(data);
  };
  const [userOne, setUserOne] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h4>http demo</h4>
      <div>
        {userOne.map((item) => {
          return (
            <p key={item._id}>
              <span>{item._id}</span>---
              <span>{item.name}</span>---
              <span>{item.email}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
