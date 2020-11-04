const fetch = require('node-fetch');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

// => 데이터를 가져와서
// => cheerio로 분석해서
// => 타이틀만 뽑아오면 됩니다.
// '.notice.title' => selector key

//22분까지. Promise

// => ['[서무] 2020년도 동절기 난방운영 계획 안내 새글', '2021학년도 관정이종환교육재단 신규 장학생 선발 안내']


const getNotices = () => {
  const url = 'https://cba.snu.ac.kr/notice';
  return fetch(url)
    .then(res => res.buffer())
    .then(buf => {
      const strContents = Buffer.from(buf);
      const body = iconv.decode(strContents, 'euc-kr').toString();
      const titleTexts = [];
      // html가져오는 거고

      const $ = cheerio.load(body);
      const titleBoxes = $('.notice.title');
      for(let i=0; i< titleBoxes.length; i++)
      {
        const titleText = $(titleBoxes[i]).text();
        titleTexts.push(titleText);
      }
      return titleTexts;
    });
}

getNotices().then(res => console.log(res));
