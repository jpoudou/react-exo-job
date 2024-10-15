import Job from "./Job";

import dataJob from "../data.json";

const Jobs = (props) => {
  return (
    <div className="container">
      {dataJob.map((elem) => (
        <Job
          key={elem.id}
          classJob={elem.classJob}
          title={elem.title}
          contractType={elem.contractType}
          country={elem.country}
          city={elem.city}
        />
      ))}
    </div>
    //   <Job
    //     classJob={"red"}
    //     title={"Titre"}
    //     contractType={"CDI"}
    //     country={"USA"}
    //     city={"New York"}
    //   />
    //   <Job
    //     classJob={"green"}
    //     title={"Titre2"}
    //     contractType={"CDD"}
    //     country={"FR"}
    //     city={"New York"}
    //   />
    // </div>
  );
};

export default Jobs;
