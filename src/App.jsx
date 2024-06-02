import { useState } from "react";
import SearchBox from "./SearchBox";
import axios from "axios";
import Navigationbar from "./Navigationbar";
import Cardcom from "./Cardcom";

function App() {
  let [getdata, setGetdata] = useState([]);
  let [retrivedata, setRetrivedata] = useState(false);
  async function getValue(v) {
    console.log(v);
    const key = "04183a75e72e4b74b9b163746240206";
    const response = await axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${v}`)
      .catch((e) => {
        setGetdata([]);
        setRetrivedata(false);
        console.log(e.request.status);
      });

    if (response.data) {
      setRetrivedata(true);
      console.log(response.data);
      setGetdata([response.data]);
    }
  }

  return (
    <>
      <div className="text-center">
        <Navigationbar />

        <div className="d-flex w-100 justify-content-center align-items-center">
          <SearchBox  onSearch={getValue} />
          <Cardcom onCheckdata={retrivedata} onData={getdata} />
        </div>
      </div>
    </>
  );
}

export default App;
