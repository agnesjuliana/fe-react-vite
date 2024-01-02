export const Greet = (props) => {
  const { name, usia } = props;

  return (
    <>
      <h1 className="text-[64px] font-normal text-center text-green-300">
        Hello world! {name}, {usia}
      </h1>
    </>
  );
};