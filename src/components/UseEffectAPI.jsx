import React, { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUser(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>List of gitHub Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {user.map((curEelm) => {
            return(
                <div>
              <div className="col-10 col-md-4 mt-5">
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img src={curEelm.avatar_url} alt="avatar" className="rounded" width="155" />
                  </div>
                  <div className="ml-3 w-100">
                    <h1 className="mb-0 mt-0 textLeft">{curEelm.login}</h1>
                    <span className="textLeft">{curEelm.organizations_url}</span>
                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                      <div className="d-flex flex-column">
                        {" "}
                        <span className="articles">Articles</span>{" "}
                        <span className="number1">38</span>
                      </div>

                      <div className="d-flex flex-column">
                        {" "}
                        <span className="follower">Follower</span>{" "}
                        <span className="number2">{curEelm.followers_url}</span>
                      </div>

                      <div className="d-flex flex-column">
                        {" "}
                        <span className="rating">Rating</span>{" "}
                        <span className="number3">8.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
