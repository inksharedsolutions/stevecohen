import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
import './accordion.scss'
const { Panel } = Collapse
const { Option } = Select



const text = `
  You will never get anywhere or accomplish anything without at least trying and doing something you are passionate about.
`;



class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

   iconChanger = ()=>{
    
    console.log('clicks')

   }


   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                onClick={event => {
                    event.stopPropagation();
                }}
            />
            )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
}

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel
            className="panel" 
            header="About The Book"
            key="1" 

            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
          className="panel"
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton : 'https://www.stratton-press.com/books/a-b-cs-of-hockey/',
                          barnes: 'https://www.barnesandnoble.com/w/a-b-cs-of-hockey-arlis-kadrmas/1123034147?ean=9781643459851',
                          amazon :'https://www.amazon.com/B-Cs-Hockey-Arlis-Kadrmas-ebook/dp/B0872HZBQJ/ref=sr_1_1?dchild=1&keywords=9781643459851&qid=1588017305&sr=8-1', 
                        },
                        reviews:{},
                        isNonfront:false,
                        paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
          className="panel"
            header="Purschase PaperBack" 
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                        data={{
                            ebooks:{},
                            isNonfront:false,
                            reviews:{},
                            paperback:{
                              amazon:'https://www.amazon.com/B-Cs-Hockey-Arlis-Kadrmas/dp/1643457276/ref=sr_1_1?dchild=1&keywords=9781643457277&qid=1588017323&sr=8-1',
                              barnes:'https://www.barnesandnoble.com/w/a-b-cs-of-hockey-arlis-kadrmas/1123034147?ean=9781643457277',
                              booksamillion:'https://www.booksamillion.com/p/B-Cs-Hockey/Arlis-Kadrmas/9781643457277?id=8049069540563&_ga=2.151035065.1857148248.1605750607-2145380449.1604906972',
                          }
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions