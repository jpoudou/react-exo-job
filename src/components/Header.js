import Title from "./Title";

const Header = (props) => {
  return (
    <div className="header-div">
      <Title name={props.title} />
    </div>
  );
};

export default Header;
