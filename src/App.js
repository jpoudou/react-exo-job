import "./App.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  // const tab = [<p>Bonjour</p>, <p>Ola</p>, <p>Hello</p>];
  // const tabNum = [1, 2, 3, 4, 5];

  // const newTab = tabNum.map((elem) => elem * 2);
  // console.log(newTab);

  return (
    <div>
      <Header title={"Voici mon titre"} />
      <Jobs />
      {/* {tab} */}
    </div>
    // <div>
    //   <div className="App">
    //     <h1>Lorem</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
    //       corrupti iure consequuntur a esse ut perspiciatis in harum id
    //       doloribus tempora autem reiciendis dignissimos, facilis voluptatum
    //       suscipit libero et. Assumenda?
    //     </p>
    //   </div>
    //   <div className="App">
    //     <h1>Lorem</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
    //       corrupti iure consequuntur a esse ut perspiciatis in harum id
    //       doloribus tempora autem reiciendis dignissimos, facilis voluptatum
    //       suscipit libero et. Assumenda?
    //     </p>
    //   </div>
    // </div>
  );
}

export default App;
