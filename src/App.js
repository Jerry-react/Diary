import Header from './MyComponant/header';
import Footer from './MyComponant/footer';
import Left from './MyComponant/left';
import Add from './MyComponant/add';
import { useState } from 'react';
import './App.css'
import Profile from './MyComponant/profile';


function App() {
  const [form, setform] = useState(true);
  const [list, setlist] = useState("");
  const [data, setdata] = useState(null);
  const [show, setshow] = useState(true);
  const [profile, setprofile] = useState(false);

  return (
    <>
      <div className='full'>
        <div className='first'>
          <Header setprofile={setprofile} />
          <div className={profile ? "ok" : "ko"}>
            <Profile />
          </div>
        </div>
        <div className='second'>
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
        <div className='third'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;