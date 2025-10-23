const PageHeading = ({skillName,providerName}) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">{skillName}</h2>
      <p className="text-[#627382] text-xl mt-3">{providerName}</p>
    </div>
  );
};

export default PageHeading;
