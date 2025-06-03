import axios from "axios";
import React, { useEffect, useState } from "react";

const API = "https://d703-46-251-213-34.ngrok-free.app/api/user/all";
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6W3sidGl0bGUiOiJBRE1JTiJ9LHsidGl0bGUiOiJVU0VSIn0seyJ0aXRsZSI6IkdVRVNUIn0seyJ0aXRsZSI6Ik1BTkFHRVIifV0sImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoiYWRtaW4iLCJpYXQiOjE3NDg5MjUyNTQsImV4cCI6MTc1MjUyNTI1NH0.rLxpEQIMz9JhOUDplb7eS5TyzBSNlCVn04f1RT1-MOh6Nyz3hkvvsuvu-Q-cXB_4";

function Masters() {
  const [data, setData] = useState([]);

  const handleFunc = async () => {
    try {
      const res = await axios(API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFunc();
  }, []);

  console.log(data);

  return (
    <>
      <div className="w-full h-screen">
        <div className="w-11/12 h-full mx-auto bg-neutral-300">
          <h1>Masters Page</h1>
        </div>
      </div>
    </>
  );
}

export default Masters;
