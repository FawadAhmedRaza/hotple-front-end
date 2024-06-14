import H3 from "../Typography/h3";

const BreadCrumbs = ({ heading }) => {
  return (
    <div className="px-2 py-2">
      <H3>{heading}</H3>
    </div>
  );
};
export default BreadCrumbs;
