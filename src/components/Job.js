const Job = ({ title, contractType, country, city, classJob }) => {
  // const Job = (props) => {
  const bool = true;
  //   const { title, contractType, country, city, classJob } = props;

  return (
    <div className={`item ${classJob}`}>
      {/* condition avec un else */}
      {/* {props.title ? <h2>{props.title}</h2> : <h2>PADS DE TITRE</h2>} */}

      {/* condition avec pas de else */}
      {title && <h2>{title}</h2>}
      <p>
        <span>
          {contractType} - {country} - {city}
        </span>
      </p>
    </div>
  );
};

export default Job;
