const quotes = [
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "요한 볼프강 폰 괴테",
  },
  {
    quote:
      "우리는 사람을 대할 때, 논리적인 동물을 대하고 있지 않다는 점을 기억해야 한다.",
    author: "앤드루 카네기",
  },
  {
    quote: "인간은 변덕스럽고 위선적이며 탐욕스러운 동물이다.",
    author: "니콜로 마키아벨리",
  },
  {
    quote: "권력자들 사이에서는 오직 힘에 의해서만 신의가 지켜진다.",
    author: "니콜로 마키아벨리",
  },
  {
    quote: "시작은 그 일의 가장 중요한 부분이다.",
    author: "플라톤",
  },
  {
    quote: "인간은 자기가 행복하다는 것을 알지 못하기 때문에 불행한 것이다.",
    author: "표도르 도스토옙스키",
  },
  {
    quote: "과거과 현재는 수단이며, 미래만이 우리의 목적이다.",
    author: "블레즈 파스칼",
  },
  {
    quote: "한 나라의 가치는 그 나라를 구성하고 있는 개인들의 가치다.",
    author: "존 스튜어트 밀",
  },
  {
    quote: "철학은 무지로부터의 탈출이다.",
    author: "소크라테스",
  },
  {
    quote:
      "지식조차 시대에 맞는 것이어야 한다. 그렇지 않으면 지식이 있어도 무지한 자가 된다.",
    author: "발타자르 그라시안",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random() * 10, 10을 곱하지 않으면 소수점 이하의 값만 출력됨
// Math.ceil, 올림 / Math.floor, 내림 / Math.round 반올림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
