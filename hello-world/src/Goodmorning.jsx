
const Goodmorning = (props) => {
  const { userName, ageRange } = props
  return (
    <>
      <div>
        Goodmorning {userName}
        {
          ageRange?.map((item) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })
        }
      </div>
    </>
  );
};

export default Goodmorning;
