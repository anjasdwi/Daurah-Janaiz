import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { datas } from './static/datas'
import './App.css';
import 'react-accessible-accordion/dist/fancy-example.css';

const App = () => {

  const [datasDaurah, setDatasDaurah] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function fetch() {
    try {
      const res = datas
      setDatasDaurah(datas)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (datas) {
      setLoading(true)
      // Execute the created function directly
      fetch()
    }
  }, [])
  
  const performSeacrh = (searchTerm) => {
    console.log('masuk')
  }

  const searchChangeHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase()

    if (searchTerm) {

      //Convert to lower case
      const obj = datasDaurah.map(function(a) { 
        a.question = a.question.toLowerCase();
        return a;
      });

      const list = obj.filter(item => item.question.includes(searchTerm));
      console.log(list)
      setDatasDaurah(list)

    } else {

      fetch()

    }
  }

  return (
    <div className="App">
      <header>
        20 Pertanyaan Daurah Janaiz
        <div className="made">
          Alhamdulillah, made with &#10084; by<br/>
          <span>
            <a href="">@dwianjas</a>
          </span>
          <span>
          <a href="">@fahimahmad96</a>
          </span>
          <span>
          <a href="">@anggadwiputra997</a>
          </span>
        </div>
      </header>
      <div className="input">
        <input type='text' onChange={searchChangeHandler} placeholder="Type Search here...."></input>
      </div>
      <Accordion
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
      >
        {
          datasDaurah.map((data, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      {data.question}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <img src={data.answer} style={{
                      maxWidth: "400px",
                      width: "100%"
                    }}/>
                </AccordionItemPanel>
            </AccordionItem>
          ))
        }
      </Accordion>

    </div>
  )
}

export default App;
