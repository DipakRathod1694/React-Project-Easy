import PackageContext from "./Context";
import { useState } from "react";

const Provider = (props) => {
  let [intro, setIntro] = useState({
    name: "Dipak",
    age: 21,
    country: "India",
  });
  return (
    <PackageContext.Provider
      value={{
        data: intro,
        updateAge: () => {
          setIntro({ ...intro, age: intro.age + 1 });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
