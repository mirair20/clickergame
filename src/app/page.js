"use client";
import { useState, useEffect } from "react";
import "./globals.css";

export default function MyButton() {
  const [cookie, setCount] = useState(0);
  const [villagerCount, setGrandmaCount] = useState(0);
  const [villagerMultiplier, setVillagerMultiplier] = useState(0);
  const grandmacost = 100;
  const upgradecost = 200;
  const cookiespersec = villagerCount + villagerMultiplier;

  function handleClick() {
    setCount(cookie + 1);
  }
  
  function purchaseVillager() {
    if (cookie >= grandmacost){
      setCount(cookie - grandmacost)
      setGrandmaCount(villagerCount + 1);
    }
    else {
      alert("insufficent cookies")
    }
   
  }

  function Upgrade(){
    if(cookie >= upgradecost) {
      setCount(cookie - upgradecost)
      setVillagerMultiplier(villagerMultiplier + 1.5);
    }
    else {
      alert("not enough cookies for upgrade")
    }
   

  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (villagerCount >= 1) {
        setCount((prevCount) => prevCount + villagerCount + villagerMultiplier);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [villagerCount, villagerMultiplier]);

 


  return (
    <div>
      <button id="btn" className="Button" onClick={handleClick}>
         
      </button>
      <h1  className="cookies">{cookie} cookies</h1>
      <h1 className="counter">{cookiespersec}/s</h1>
     

      <div>
      <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgYGBkSGBkYGBoVGRgYGBkaGRgYGhgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHTQhJCQ0NDQ0NDE0NDQ0NDQ0NDE0NDQ0NDQxNDExNDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDRANP/AABEIAT8AngMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQMEBQIGBwj/xABBEAACAQIDBAYEDAYCAwEAAAABAgADEQQhMQUSQXEGB1FhgbITIjKRIzM0NUJScnN0scHRFGKCoeHwJJJTotJD/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAfEQEBAAMAAgMBAQAAAAAAAAAAAQIRMQMSITJRYUH/2gAMAwEAAhEDEQA/AOzQhCAQhCAQhCAQhCAQhEgEJT7Q2/SpXF99h9Fc7HvOg/Pumr47b1aocmKAG4Ckj3tqfy7pzvkxxdcfFll/HQIs03Z/Sh1stUbw+stgfFdD/abRg8bTqjeRgw421HMHMTcc5lxOXjyx6lQhCWgQhCAQhCAQhCAQhCAQhEgEJUbQ29SpXF95vqrnY950H5901XaO3K1W4J3E+quV+ban8u6c8vJMXXHxZZfxtO0ukFGjcX32H0Vzsf5m0H5901PaW3q1a4LbifVXK4/mbU/l3SrbumG4TOWXktenHw44/wBL6Tsh6TtmQpw9HOe/9dWHpDHKdZlIZSVYaEGxHiIoQCLuxKNg2X0scWFZd4fWWwYc10Phbxm14TG06q7yMGHG3DmDmJzWZ0qrKQVYqw0INj7xLx81nflwz8Ey58Oowmm7P6VsthWG8PrLYHxXQ+FptGDxtOqu9TcMO7UcxqPGejHKXjzZYZY9S4QhKQIQhAIQhASaN1gbZqUHpIpO66uXUHdJsQB6wz4nLSbzOa9anxlD7D+ZZGf1q/H9oq8LjkfJTY/VOR8O3wkgrNQk/C7VdMm9cd+vg37zzeuuPbMv1sAWZSLhccj+ybH6pyP+fCSpF2uCEQmY3myDOJMCxmIDRoOgxZgxCi7EADUnICVON28i5UxvntOS/uf7RrfGWydWtRwASSABqTkB4yqrdIvRteiTvDRgSoH6n8pQYvFvUN3YnsGgHIaSODOsjllnvj0D0dxLVcLQqObs9JHY2AuzKCTYZCWkpuiPyLC/cU/IJcz0Tjx0QhCawQhCATmfWp8ZQ+w/mWdMnM+tU/CUPsP5lkZ8X4/s0WYgxRGlOc4x6T0n4Xarpk3rjv18D+8gQk2bbLps+GxyVMgc/qnI/wCfCSbTTTJeH2xUQWJDi2W9qPHUzLj+Lmf62Z2AFyQANScgPGVGN28i5UxvntOSj9T/AGlDisW9Q3diewaAchGJsx/U3P8AD+Kxb1Dd2J7BoByEYmJmUvWkbY1IKsyhNHeuiPyLC/cU/IJcSn6JfIsN9xT8glxO048t6WEITWCEIQEnM+tb4yh9h/zWdMnM+tb4yh9ip+aycuL8f2aIDArIb7QRXKMd0i2Z0NwDrw14yaJwsemUsIQmAjLjKPTCoMjNgixCYsCJTDRjsaOsdgEIRCYHe+iXyLDfcU/IJcSn6I/IsL9xT8glxO048t6WEITWCEIQEnNOtUfCUPsP5lm0dI+lVLB1ER1Zy92bdIui6BrHW5vlcaHx0HrI2zTrvh3oOGXcqBhmCDvJkynMGRnfh0wl3K0nanRyu49PTAdW1Qe2N31cgfa0vln3Sjw2OqUzZTkNVbT3cJ0TYe1kCKj+qQTn9E3YnXhrNOr4dWchhqxz0OvbOdykkc/J5LhlJZ2pGE2wj5N6jd/s/wDb95YzW8Vsh1zT1x7m93HwjGFxz0zZTkNVbMe7h4R6749HtZ1tl425yMgYXa6Pk3qN36Hk37ydU0MzS9ymIRBFmhIsIGAExtmikTEiB3/oh8hwv3FPyCXEpuiHyHC/cU/IJcztOPLelhCE1hJE2ljUo02qubKilj4aAdpJsAOJIkucw6zds77LhUb1UtUqWOr29RDyB3uZHETLdNxm607aW0mxFZqz5M7XtqFAyVQewAAeEr8eM15GOIlszGMZqOU5ZcemM8P7I8fzjjoDmRmOMiU6pXl2SQmIU6m3P95yu1SY3rMiV20qCsRcZ210PvmeI2kBkgv3nT3cZngB6RWL5m+R7MuHZFmWnPz43LGzG6qPU6L1vRrVp2qKw3ioydc+w+1pwz7paVNDL7ZG0URFpMSu6LBjocydeGso6vsnlOls1GeKZSay6irFiLFmV0ES8CYgiDKNtM2MRabNmBNHe+iHyHC/cU/IJcyn6IfIcL9xT8glxO048t6WEITWKnpHtVcLQaqbFvZRT9Jz7I5cT3AziFUs7FmO8zEszHUkm5J8Zs/Tjbf8RX3FN6dK6rbRnv6zd4uAB3C/Ga1OeV3XbDHUFpV7UWzLa4yP5y0lXtY5ryP5zIu8MITbOY1fZPIxaZyiVfZPIyL1U4gR/DVmTNTb8j4RiWGzqasrAi+f6TUzqfSfeUMeMjU3IyvkeElIgUADhIlPUSVnlgTFgtNm0HjKSaIjyU2bT3zCtiadPInfYfRHDn2Srxm0nfK+6vYuXvPGbMU3KRZV8TSp6nfb6o4c+A/3KVmK2m75X3V+qv6nUyDCXJIi5WvTPQb5uwf4aj5BL+UHQb5uwf4aj5BL+W5EmsdN9t/w9DdQ2qVbovaq/TfwBAHew7JsdaoqqWYgKoLMToABck+E4j0g2ycVXeqb7t92mPqoPZy7T7R72MnK6i8Md1XgTF2tMojLeQ7mzVtrIm0ihUE+1fdW3f2iO1FN5kqC1iNdYYrKYyiVfZPIyZVwfFDbuOY/xI1akwBBFiQeXvk3H5bKrZbbI9luf6SoxCMNP7ZzHCY90ORuL5qcx/ib6p9pKvTjE3yhNmBtnkDlfI+MZpMCQQbjulTWYvUL29o3trbK36R/Dr62RIyOhtHqeyxfHol95WLA2AysZW4najvlfdX6q/qdTG8dSKgcc5hgMOXcKOOp7BxMuSRNtvwl4HZrOhcEDOyg6G2ufDP8pHxGGZDZ1I7Ow8jxm1IAoCjIAADwg6AixAI7DmJm2+rT2XOKFl3jNlKTdDY9hzHv1EqnpFSQwzGo1m7TcdPR/Qb5uwf4aj5BL+UPQj5vwn4al5Fl9LcmgdZW3d1BhUPrOA1S3BOCc2I9w75zdZ0Lpv0OqOz4nD3qMfWekT6xstr02ORNgBum3ccgp5xTqBiQPaUlWUgqysDYqynNSDwMjLe3bCzXwkxGEVV4Rx6RHfJdEUiZIt45a8eNDLKYaRwmcwxDZW7Y8ykayO4BmiA+D3rlTbjnpIOJwefrCx7Rx/eXSMNJI3BaxF+283afXbWqVIhx2X18JKcAetbOS8Rggb7mXcdJCdGXJrj/AHgZu2a0j49t5Rz/AElrsXB7ibx9p8+S8B+vujNPZrFl3wN32j/8kf7xlxMtMZ87NERC9hHpHqpfSYo1XxQVSx4cO08BKAEsSTqczHdp195t0aLlzbj+3vkak9spUiLd13Tq36W4erQo4RjuVqdNaQViLVQi23kPE2Fyuoz1AvN+nlPe4jmD2EZgjvnc+q7aeLxGGZ8Qd9Fb0dFz8Y4W4beJ9oA2UNqSGvfWVK55T/W9TUemPQijjR6RT6HEqLJWTK9tFqAe2v8AccDwO3QmpedNoLisBU9HjaRtfdWqguj/AGTYKxtwyI7JOwuKSoLowYce0cwcxO64rDJURkqIrqwsyuoZWHYVORnOOkPVPTYmrgahoVNQjFjTPcGHrJ/7Duk3F0x8lnWrboveLKvHPi8Ewp46gy3NlqAAq3Jh6jdtgQRxEm4fGI67yMGH9x3EHMSLLHaZS8Jin+j75X16lspKrsLFjzlUrF27yYjLU3DLfPgPzkkiJSSwCiSGo9kNkRGW0aqNlH6ikHMRpkvDC0qpOvvjwMbFO0cUWhpZA2nX9Glx7RyX9T4ftJ5M1nH4ku5PAZLy7fGInK6iIiX1ihbTO0wlOa02Bsh8XXp4dMi7ZtqFQZu55AHmbDjPSez8GlCmlGmtkpqqKMzYKLC51J75o3VF0e9Dh/4px8JiACvatEG6f9sm5bvZOiSpE27LCEJqRCEIDGLwyVEZKiK6sLMrqGVh2FTkZwvrM6M0MHXpNhd6n6RXYrvEqpVlHqXzAO9pcjS1p3uci66fjsL9ip5kmXiseuaPtN7Bag0+kMr8+BlpsrdYFwQeHeOY4SrIjJw1jvoxRhxB/wBykum7G40E4+6PTWcH0gdLJWW/DfXXxGh8LTYMNi0qDeRgw7tRzGok2OkylFduHvkcJJVRRa5keYUQiExt64UFm0Gc0Q9r4ndXcGra9y/5/eUkcxFYuxY6k+7sEZUyo527rIxszJzMYY9K9Bvm7B/hqXkEvpQ9Bvm7B/hqXkEvpbkIQhAIQhAScj66fjsL9ip5knXJyProHw2F+xU8yTLxWPXN1ixFmUl0RnGZ5yOgKsGRircCDaSH1POMrqOcMq0obcdbLWW/8y5HxGh8LSzTEo4ujAj/AHUaiUzAHIxhsOQd5GKnn+szSvaxsV5U7VxNzuDhm3PgIym13QWdbm2TDLPhfgfCQi9873vneJC5AmZiYoIjGalnaNO2czQ5Rl2zMMr0x0G+bsH+Go+RZfyg6DfN2D/DUfIsv5bmIQhAIQhASck65/jsN93U8yTrc5J1z/HYb7up5kmXiseucQmDGZCS6I76nnGV1HOPPqecZXUc4ZU+ITFiMIaZxOYHORRStp7uElVRGWMMrHe8Jg5g5jbGGU6ukZbWZAxLQx6a6DfN2D/DUfIsv5QdBvm7B/hqPkWX8tAhCEAhCEBJyTroPw2F+xU8yTrc5D11H4bDfd1fMky8Vj1zhoK0bc5xVMl0YPqecjo+Y5iSDrIaajmITVrCI0RWhRuvoJGYyRidBzkVjDKR400VjBUvCQsWOKtohWG6elug3zdg/wANR8iy/lD0G+bsH+GpeQS+luYhCEAhCEAnHuu347C/d1fMk7DOZdbPR7E4k0a1Cmai0lqK6qQXG8VIIXVh6uguc9Jl43Hrj8dRcpiF1BFiCVIORBGRBHAjsipUAyMl1R3OZ5xhNRzEffU84wmo5iEVaNMFMzaNwtjidBzkOoZKr6CRnW8MptY8ixFUCZrDJCgRCsyiFoa9JdB/m/CfhqXkWX0oeg/zfg/w1LyLL6W5CEIQCEIQCEIQKDpB0UwuNHw1Oz2sKiepUHZ61swOxgR3Tzliqe67gZ7rMv8A1Nv0nqueWcYfhH+2/mMmrx+VeWsZihzHMSUyAxhqJGmcyVtlWTRsmMUmN7R5tIUwr6CMMZm8acwylUzJTMEg7gQwVH902vo10CxuMAYJ6Gkc/SVQVuO1E9pv7A9st+pfBUq2JrNUpqxpojpvKG3GLMCy30OQzncpsibkgbF2eMPh6VAEsKVNKQYixO4oW9uF7SwhCUkQhCAQhCAQhCAk8s4+mRUqXH038xnqaebK4vVcH67eYzLNtl0pQ0UGWeK2euq+qezh/iVtSky6j9pNjpMpSW4zNmyjYaKDMUaraRhjaTCJFxWo5fqZu02MN6NkxbzFUJhLqXUQf+RivuqfnadsnFeopbV8V91T8zTtUtNLCEIYIQhAIQhAIQhAJwPpF0ZxOFdmqIShcsKiXZLFiRvG11PMDuvO+TEi+RgebHqG0acgzs23+r7DYi7Uv+PU1uguhPfTyA8LeM5nt7orisJc1Uun/kT1k8Ta6/1AeMDXKmFB0y/KRqlJl1Hjw98sI/TsTbXuMyxUyqmDSLizmOX6mXmNwKjNcr8OH+JS4yiQwB7P1MzSvaWIt5JAmC0wI6gmyItdO6jltiMT91T87Ts8411IfKMT91T87Tss1ghCEAhCEAhCEAhCEAhCEAmDC+RzByMzhA0rb/V5hsRdqX/Hc5+oL0yf5qeQH9JHjOabb6L4rBm9VLpfKonrJ4nVf6gPGegJiRfWB5qquSBKvHrdh9n9TO7dIOr3DV7tS+Aqa+qL0ye+nw/pI8Zoq9V2NqVt1mp06agXq72/vC59hBZiftbvMwOdWAzP95ufRvq6xuK3Wdf4ekc96qCHI/kpZMf6t0cRedY6NdBsHgrOiekqj/8AWpZnB/kHsp/SAe0mbTA1vor0Qw+AVvRb7O4AqVHa7MASQLCyqBc5Ac76zZIQgEIQgf/Z" alt="Avatar" class="avatar"/> 
      <button  id="grandma" onClick={purchaseVillager}> Villagers {villagerCount}</button>
      <button onClick={Upgrade} >Upgrade</button>
      </div>
    </div>

  
  );
}
