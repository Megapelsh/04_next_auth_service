import {useEffect} from "react";

const Cabinet = () => {

  console.log(1111)
  useEffect(() => {
    // console.log(window.localStorage)
    localStorage.setItem('vlad', 'BanMan')
  }, [])


  return (
      <div>
        Cabinet
      </div>
  );
};

export default Cabinet;