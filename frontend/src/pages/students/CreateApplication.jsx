import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../providers/AuthContext";
import { useNavigate } from "react-router-dom";


const CreateApplication = () => {
  document.getElementsByTagName("title")[0].text = "Create";
  const [applicationTemplates, setApplicationsTemplates] = useState(null);
  const {role, isLoading, authenticated } = useContext(AuthContext);


  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!authenticated || role !== "student") {
        navigate("/login");
      }
    }
  }, [isLoading, authenticated, navigate, role])

  useEffect(() => {
    const getApplicationTemplates = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/applicationTemplates`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      setApplicationsTemplates(json);
    };
    getApplicationTemplates();
  }, []);



  return (
    <main className="applicationMain">
      <div className="cards">
        {applicationTemplates
          ? applicationTemplates.map((template, index) => {
            return (
              <AppCard
                key={index}
                icon={template.imgUrl}
                subject={template.subject}
                appid={template._id}
              />
            );
          })
          : "No Templates Found"}
      </div>
    </main>
  );
};

const AppCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={ ()=>{navigate(`/student/editApplication/${props.appid}`)} }>
      <div>
        <img src={props.icon} width={100 + "%"} alt ='icon'/>
      </div>
      <div className="title-div">
        <h1>{props.subject}</h1>
      </div>
    </div>
  );
};

export default CreateApplication;
