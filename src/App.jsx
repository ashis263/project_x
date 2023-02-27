import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/Card";

export default function App() {

  const [datas, setDatas] = useState([]);
    useEffect(() =>{
        const fetchDatas = async () => {
            let result = await fetch("https://json-server-tan.vercel.app/api");
            let json = await result.json();
            setDatas(json);
        }
        fetchDatas();
    }, []);


  return (
    <div>
      <section className="intro">
        <h1 className="headline">We are Offering Best Features</h1>
        <p>BlueLight Health Envisions a World Where Living a Healthy Lifestyle Comes Naturally. You, as Part of Bluelight</p>
      </section>
      <div className="cards">
        {datas.map((data) => (
          <Card key={data.id} image={data.image} title={data.title} description={data.description} />
        ))}
      </div>
    </div>
  );
}
