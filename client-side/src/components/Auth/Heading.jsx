export default function Heading({ title, subTitle }) {
  return (
    <div>
      <h2 className=" text-white fw-bold">
        {title}
      </h2>
      <p className="text-start mb-2 text-white">{subTitle}</p></div>
  );
}
