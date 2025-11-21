import Header from './MyComponant/header';
import Footer from './MyComponant/footer';
import Left from './MyComponant/left';
import Add from './MyComponant/add';
import { useState } from 'react';
import './App.css'

function App() {
  const [form, setform] = useState(true);
  const [list, setlist] = useState("");
  const [data, setdata] = useState(null);
  const [show, setshow] = useState(true);

  return (
    <div>
      <Header />
      <div className='cont'>
        <div className='main'>
          <div className={show ? "box leftbox" : "hide"}>
            <Left
              setform={setform}
              list={list}
              setdata={setdata}
              setlist={setlist}
              setshow={setshow}
            />
          </div>
          <div className='box rightbox'>
            <Add
              form={form}
              setlist={setlist}
              data={data}
              setdata={setdata}
              setform={setform}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;