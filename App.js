import "./App.css";
import Header from "./Header.js";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Routes, Route } from 'react-router-dom';
import moment from "moment";
import 'moment/locale/ko';
import itemsTotal from "./data/itemsTotal"
import ItemCard from "./ItemCard";
import SeoulMap from "./SeoulMap";
import Court from './Court';
import Price from "./Price";
import Sidemenu from "./Sidemenu";


function App() {

  let [selected, setSelected] = useState(true);

  //court group listing
  let [court00, setCourt00] = useState(false);
  let [court01, setCourt01] = useState(false);
  let [court02, setCourt02] = useState(false);
  let [court03, setCourt03] = useState(false);
  let [court04, setCourt04] = useState(false);

  const seoul = [
    { court: '서울중앙지법', state: ['강남구', '서초구', '종로구', '중구', '동작구', '관악구'] },
    { court: '서울동부지법', state: ['송파구', '강동구', '성동구', '광진구'] },
    { court: '서울서부지법', state: ['용산구', '마포구', '서대문구', '은평구'] },
    { court: '서울남부지법', state: ['영등포구', '양천구', '강서구', '구로구', '금천구'] },
    { court: '서울북부지법', state: ['강북구', '노원구', '성북구', '중랑구', '동대문구'] },
  ];

  function itemsCourt() {
    let bucket = [];

    bucket.push(itemsTotal.filter(x => (x.court === seoul[0].court)));
    bucket.push(itemsTotal.filter(x => (x.court === seoul[1].court)));
    bucket.push(itemsTotal.filter(x => (x.court === seoul[2].court)));
    bucket.push(itemsTotal.filter(x => (x.court === seoul[3].court)));
    bucket.push(itemsTotal.filter(x => (x.court === seoul[4].court)));

    return bucket
  }

  function nCourt() {
    return [itemsCourt()[0].length, itemsCourt()[1].length, itemsCourt()[2].length, itemsCourt()[3].length, itemsCourt()[4].length,]
  }
  console.log(nCourt());

  // price group listing

  let [priceGroup00, setPriceGroup00] = useState(false),
    [priceGroup01, setPriceGroup01] = useState(false),
    [priceGroup02, setPriceGroup02] = useState(false),
    [priceGroup03, setPriceGroup03] = useState(false),
    [priceGroup04, setPriceGroup04] = useState(false),
    [priceGroup05, setPriceGroup05] = useState(false),
    [priceGroup06, setPriceGroup06] = useState(false),
    [priceGroup07, setPriceGroup07] = useState(false),
    [priceGroup08, setPriceGroup08] = useState(false);

  const priceInfo = [
    { label: '~ 1천만원', range: [0, 0.1e8] },
    { label: '~ 5천만원', range: [0.1e8, 0.5e8] },
    { label: '~ 1억원', range: [0.5e8, 1e8] },
    { label: '~ 5억원', range: [1e8, 5e8] },
    { label: '~ 10억원', range: [5e8, 10e8] },
    { label: '~ 20억원', range: [10e8, 20e8] },
    { label: '~ 50억원', range: [20e8, 50e8] },
    { label: '~ 100억원', range: [50e8, 100e8] },
    { label: '100억원 이상', range: [100e8, Infinity] },
  ];

  function itemsPrice() {

    let bucket = [];
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[0].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[0].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[1].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[1].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[2].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[2].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[3].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[3].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[4].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[4].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[5].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[5].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[6].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[6].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[7].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[7].range[1])));
    bucket.push(itemsTotal.filter((x) => (x.upDate[x.upDate.length - 1][1] > priceInfo[8].range[0] && x.upDate[x.upDate.length - 1][1] <= priceInfo[8].range[1])));

    return bucket
  }

  function nhPrice() {
    let nPrice = [itemsPrice()[0].length, itemsPrice()[1].length, itemsPrice()[2].length, itemsPrice()[3].length, itemsPrice()[4].length, itemsPrice()[5].length, itemsPrice()[6].length, itemsPrice()[7].length, itemsPrice()[8].length,];
    let nhBucket = [];
    for (let j = 0; j < nPrice.length; j++) {
      let n = nPrice[j];
      let h = String(n * 7) + "%";
      if (nPrice[j] === 0) { n = null }
      else if (nPrice[j] > 10) { n = '10+'; h = '77%' }
      // else { n = String(n) };
      nhBucket.push([n, h]);
    }
    return nhBucket
  }

  let todayYYYYMMDD = moment().format('l');
  let [dateGroup, setDateGroup] = useState(todayYYYYMMDD);
  let dateClicked = [dateGroup.slice(0, 4), dateGroup.slice(5, 7), dateGroup.slice(8, 10)];

  function mmdd() {
    let mmClicked, ddClicked;
    if (dateGroup.slice(5, 6) === '0') {
      mmClicked = dateGroup.slice(6, 7);
    }
    else {
      mmClicked = dateGroup.slice(5, 7);
    }
    if (dateGroup.slice(8, 9) === '0') {
      ddClicked = dateGroup.slice(9, 10);
    }
    else {
      ddClicked = dateGroup.slice(8, 10);
    }
    return [mmClicked, ddClicked]
  }

  const todaydd = moment().format('dd');
  const todayMMM = moment().format('MMM');
  const todayYYYY = moment().format('YYYY') + '년';

  function calendar() {
    let ddBucket = [], lBucket = [];
    switch (todaydd) {
      case '일':
        for (let i = 0; i < 7; i++) {
          ddBucket.push(moment().add(i, 'days').format('dd'))
        };
        for (let j = -7; j < 21; j++) {
          lBucket.push(moment().add(j, 'days').format('l'));
        }
        break;
      case '월':
        for (let i = 0; i < 7; i++) {
          ddBucket.push(moment().add(i - 1, 'days').format('dd'))
        };
        for (let j = -7; j < 21; j++) {
          lBucket.push(moment().add(j - 1, 'days').format('l'));
        }
        break;
      case '화':
        for (let i = 0; i < 7; i++) {
          ddBucket.push(moment().add(i - 2, 'days').format('dd'))
        };
        for (let j = -7; j < 21; j++) {
          lBucket.push(moment().add(j - 2, 'days').format('l'));
        }
        break;
      case '수':
        for (let i = 0; i < 7; i++) {
          ddBucket.push(moment().add(i - 3, 'days').format('dd'))
        };
        for (let j = -7; j < 21; j++) {
          lBucket.push(moment().add(j - 3, 'days').format('l'));
        }
        break;
      case '목':
        for (let i = 0; i < 7; i++) {
          ddBucket.push(moment().add(i - 4, 'days').format('dd'))
        };
        for (let j = -7; j < 21; j++) {
          lBucket.push(moment().add(j - 4, 'days').format('l'));
        }
        break;
      case '금':
        for (let i = 0; i < 7; i++) {
          ddBucket.push(moment().add(i - 5, 'days').format('dd'))
        };
        for (let j = -7; j < 21; j++) {
          lBucket.push(moment().add(j - 5, 'days').format('l'));
        }
        break;
      case '토':
        for (let i = 0; i < 7; i++) {
          ddBucket.push(moment().add(i - 6, 'days').format('dd'))
        };
        for (let j = -7; j < 21; j++) {
          lBucket.push(moment().add(j - 6, 'days').format('l'));
        }
        break;
      default:
        break;
    }
    return [ddBucket, lBucket];
  }



  // itemsTotal.map((x) => {
  //   if (calendar()[1][0] === x.upDate[x.upDate.length - 1][0]) {
  //     dateBucket.push(x);
  //   }
  // })

  return (
    <div className="App">
      {/* HEADER */}
      <Header />

      {/* Sidemenu */}
      <Sidemenu />

      <Routes>

        {/* NEW PAGE */}
        <Route path="/" element={
          <div className="body">
            {/* SECTION TITLE */}
            <div id="to-top"></div>
            <div div className="section-title">
              <h1>ITEMS</h1>
            </div>

            <div className="container-bodyBtns">
              {
                selected === true ?
                  (
                    <ul className="bodyBtns">
                      <li className="selected" onClick={() => { setSelected(true) }}>신건</li>
                      <li onClick={() => { setSelected(false) }}>전체보기</li>
                    </ul>
                  ) :
                  (
                    <ul className="bodyBtns">
                      <li onClick={() => { setSelected(true) }}>신건</li>
                      <li className="selected" onClick={() => { setSelected(false) }}>전체보기</li>
                    </ul>
                  )
              }
            </div>

            <div className="container-items">
              {/* ITEM CARDS */}
              {
                selected === true ?
                  (
                    // eslint-disable-next-line array-callback-return
                    itemsTotal.map(function (x, i) {
                      if (x.miss === 0) {
                        let a = x;
                        return (
                          <ItemCard x={a} key={i} />
                        );
                      }
                    })
                  ) :
                  (
                    itemsTotal.slice(0, 10).map((x, i) => {

                      return (
                        <ItemCard x={x} key={i} />
                      );
                    })
                  )

              }
            </div>
          </div >
        } />


        < Route path="/location" element={
          < div className="body" >
            {/* SECTION TITLE */}
            <div id="to-top"></div>
            < div className="section-title">
              <h1>LOCATION</h1>
            </div >

            <div className="container-bodyBtns">
              <ul className="bodyBtns">
                <li className="selected" onClick={() => { }}>서울</li>
                <li onClick={() => { }}>경기 인천</li>
                <li onClick={() => { }}>수도권 외</li>
              </ul>
            </div>

            {/* SEOUL */}
            <SeoulMap
              court00={court00}
              setCourt00={setCourt00}
              court01={court01}
              setCourt01={setCourt01}
              court02={court02}
              setCourt02={setCourt02}
              court03={court03}
              setCourt03={setCourt03}
              court04={court04}
              setCourt04={setCourt04}
              nCourt={nCourt()}
            />

            <div className="divider"></div>

            <div className="container-cards">

              <Court
                seoul={seoul[0]}
                court={court00}
                setCourt={setCourt00}
                itemsCourt={itemsCourt()[0]}
                nCourt={nCourt()[0]}
              />

              <Court
                seoul={seoul[1]}
                court={court01}
                setCourt={setCourt01}
                itemsCourt={itemsCourt()[1]}
                nCourt={nCourt()[1]}
              />

              <Court
                seoul={seoul[2]}
                court={court02}
                setCourt={setCourt02}
                itemsCourt={itemsCourt()[2]}
                nCourt={nCourt()[2]}
              />

              <Court
                seoul={seoul[3]}
                court={court03}
                setCourt={setCourt03}
                itemsCourt={itemsCourt()[3]}
                nCourt={nCourt()[3]}
              />

              <Court
                seoul={seoul[4]}
                court={court04}
                setCourt={setCourt04}
                itemsCourt={itemsCourt()[4]}
                nCourt={nCourt()[4]}
              />

            </div>


            <div className="divider"></div>
          </div >
        } />

        < Route path="/price" element={
          < div className="body" >
            {/* SECTION TITLE */}
            <div id="to-top"></div>
            < div className="section-title">
              <h1>PRICE</h1>
            </div >

            <div className="container-price">

              <Price
                priceGroup={priceGroup00}
                setPriceGroup={setPriceGroup00}
                nhPrice={nhPrice()[0]}
                itemsPrice={itemsPrice()[0]}
                priceLabel={priceInfo[0].label}
              />

              <Price
                priceGroup={priceGroup01}
                setPriceGroup={setPriceGroup01}
                nhPrice={nhPrice()[1]}
                itemsPrice={itemsPrice()[1]}
                priceLabel={priceInfo[1].label}
              />

              <Price
                priceGroup={priceGroup02}
                setPriceGroup={setPriceGroup02}
                nhPrice={nhPrice()[2]}
                itemsPrice={itemsPrice()[2]}
                priceLabel={priceInfo[2].label}
              />

              <Price
                priceGroup={priceGroup03}
                setPriceGroup={setPriceGroup03}
                nhPrice={nhPrice()[3]}
                itemsPrice={itemsPrice()[3]}
                priceLabel={priceInfo[3].label}
              />

              <Price
                priceGroup={priceGroup04}
                setPriceGroup={setPriceGroup04}
                nhPrice={nhPrice()[4]}
                itemsPrice={itemsPrice()[4]}
                priceLabel={priceInfo[4].label}
              />

              <Price
                priceGroup={priceGroup05}
                setPriceGroup={setPriceGroup05}
                nhPrice={nhPrice()[5]}
                itemsPrice={itemsPrice()[5]}
                priceLabel={priceInfo[5].label}
              />

              <Price
                priceGroup={priceGroup06}
                setPriceGroup={setPriceGroup06}
                nhPrice={nhPrice()[6]}
                itemsPrice={itemsPrice()[6]}
                priceLabel={priceInfo[6].label}
              />

              <Price
                priceGroup={priceGroup07}
                setPriceGroup={setPriceGroup07}
                nhPrice={nhPrice()[7]}
                itemsPrice={itemsPrice()[7]}
                priceLabel={priceInfo[7].label}
              />

              <Price
                priceGroup={priceGroup08}
                setPriceGroup={setPriceGroup08}
                nhPrice={nhPrice()[8]}
                itemsPrice={itemsPrice()[8]}
                priceLabel={priceInfo[8].label}
              />
            </div>
            <div className="divider"></div>
          </div >
        } />

        < Route path="/date" element={
          < div className="body" >
            {/* SECTION TITLE */}
            < div className="section-title">
              <h1>DATE</h1>
              <h1>{todayYYYY} {todayMMM}</h1>
            </div>

            <div className="container-calendar">
              <div className="frame-date">
                {
                  calendar()[0].map((x, i) => {
                    return (
                      <div className="dddd" key={i}><span>{x}</span></div>
                    )
                  })
                }
              </div>
              <div className="frame-date">
                {
                  calendar()[1].map((x, i) => {

                    let n = [];
                    for (let j = 0; j < itemsTotal.length; j++) {
                      if (x === itemsTotal[j].upDate[itemsTotal[j].upDate.length - 1][0]) { n.push(x) }
                    }
                    let z = n.length;

                    let today = parseInt(moment().format('D'));
                    let thisMonth = parseInt(moment().format('M'));
                    let y = parseInt(x.slice(8, x.length - 1));
                    let m = parseInt(x.slice(6, 8));
                    if (m <= thisMonth && y < today) {
                      return (
                        <div className="days past" key={i} onClick={() => {
                          setDateGroup(x); console.log(dateGroup);
                        }}>                          <p className="calendar-dd">{y}</p>
                          <p className="calendar-n">{z === 0 ? null : z}</p></div>
                      )
                    }
                    else if (m > thisMonth || y > today) {
                      return (
                        <div className="days" key={i} onClick={() => {
                          setDateGroup(x); console.log(dateGroup);
                        }}>
                          <p className="calendar-dd">{y}</p>
                          <p className="calendar-n">{z === 0 ? null : z}</p>  </div>
                      )
                    }
                    else {
                      return (
                        <div className="days today" key={i} onClick={() => {
                          setDateGroup(x); console.log(dateGroup);
                        }}>
                          <p className="calendar-dd">{y}</p>
                          <p className="calendar-n">{z === 0 ? null : z}</p>
                        </div>
                      )
                    }
                  })
                }
              </div>
            </div>
            <div className="divider"></div>

            <div className="container-bubble">
              <div className="speech-bubble">
                <p>
                  지금으로부터 <span>{moment(dateClicked[0] + dateClicked[1] + dateClicked[2], "YYYYMMDD").fromNow()}</span> ,
                </p>
                <p>
                  경매일이 <span>{mmdd()[0]}월 {mmdd()[1]}일</span>인 물건들입니다.
                </p>
              </div>
            </div>
            <div className="divider"></div>

            {
              // eslint-disable-next-line array-callback-return
              itemsTotal.map(function (x, i) {
                if (x.upDate[x.upDate.length - 1][0] === dateGroup) {
                  let a = x;
                  return (
                    <>
                      <ItemCard x={a} key={i} />
                    </>
                  );
                }
              })
            }
            <div className="divider"></div>

          </div >
        } />

        < Route path="/news" element={
          < div className="body" >
            {/* SECTION TITLE */}
            <div id="to-top"></div>
            < div className="section-title">
              <h1>AUCTION NEWS</h1>
            </div>
          </div >
        } />

      </Routes >


      {/* FOTTER */}
      < div className="footer-watched" >
        <div className="footer-title">
          <p>watched</p>
          <a className="to-top" href="#to-top">
            <i className='bx bx-arrow-to-top'></i>
          </a>
        </div>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={5}
          freeMode={false}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구1</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구2</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구3</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구4</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구5</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구6</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구7</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구8</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="watched-cell">
              <i className="bx bxs-buildings"></i>
              <p>서울 종로구9</p>
              <p>100.5억</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div >

    </div >
  );
}


export default App;
