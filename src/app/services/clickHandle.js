"use client";
import { useState, useEffect } from "react";

export default function MyGame() {
  const [cookie, setCount] = useState(0);
  // localStorage.setItem('cookies', JSON.stringify(cookie))
  // const totalCookiesStorage = JSON.parse(localStorage.getItem('cookies'));
  // console.log(totalCookiesStorage);
  const [minerCount, setMinerCount] = useState(0);
  const [minerUpgradeCount, setMinerUpgradeCount] = useState(0);
  const [minerMultiplier, setMinerMultiplier] = useState(0);
  const minercost = 10;
  const upgradecost = 1;
  const cookiespersec = minerCount + minerMultiplier;

  function handleClick() {
    setCount(cookie + 1);
    document
      .getElementById("btn")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });
  }

  function purchaseMiner() {
    if (cookie >= minercost) {
      setCount(cookie - minercost);
      setMinerCount(minerCount + 1);
    } else {
      alert("insufficent cookies");
    }
  }

  function Upgrade() {
    if (cookie >= upgradecost) {
      setCount(cookie - upgradecost);
      setMinerMultiplier(minerMultiplier + 1.5);
      setMinerUpgradeCount(minerUpgradeCount + 1);
    } else {
      alert("not enough cookies for upgrade");
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (minerCount >= 1) {
        setCount((prevCount) => prevCount + minerCount + minerMultiplier);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minerCount, minerMultiplier]);

  return (
    <div>
      <button id="btn" className="Button" onClick={handleClick}></button>
      <h1 className="cookies">{cookie} cookies</h1>
      <h1 className="counter">{cookiespersec}/s</h1>

      <div className="villager">
        <button className="Button1" id="miner" onClick={purchaseMiner}>
          {" "}
          {"Miner " + minercost + " C"} {minerCount}
        </button>
        <button onClick={Upgrade}>
          {" "}
          {"Upgrade " + upgradecost + " C"} {minerUpgradeCount}
        </button>
      </div>
    </div>
  );
}
