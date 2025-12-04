import { useEffect, useState } from "react";
import './Home.css'


function HomePage() {

  useEffect(() => {
    document.title = 'Register - Home'
  })

  const [counter, setcount] = useState(0);

  const [count, setCount] = useState(0);

  const handleCLick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className="home">

        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Age</th>
              <th>Score</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Angela</td>
              <td>37</td>
              <td>{count}</td>
              <td>Female</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Emma</td>
              <td>41</td>
              <td>{count}</td>
              <td>Male</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Precious</td>
              <td>31</td>
              <td>{count}</td>
              <td>Female</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Daniel</td>
              <td>27</td>
              <td>{ count}</td>
              <td>Male</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Faith</td>
              <td>30</td>
              <td>{count}</td>
              <td>Female</td>
            </tr>
          </tbody>
        </table>

        <button onClick={handleCLick}>Score</button>
      </div>
    </>
  );
}

export default HomePage;