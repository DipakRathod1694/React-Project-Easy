import PackageContext from "./Context";
import Provider from "./Provider";

const Name = () => {
  return (
    <div>
      <PackageContext.Consumer>
        {(value) => (
          <div>
            <h2>My name is : {value.data.name}</h2>
            <h2>My age is : {value.data.age}</h2>
            <h2>I live in {value.data.country}</h2>
            <button onClick={value.updateAge}>Update Age</button>
          </div>
        )}
      </PackageContext.Consumer>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>THIS is home page</h1>
      <Provider>
        <Name />
      </Provider>
    </div>
  );
};

export default Home;
