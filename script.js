const ARI_URL = 'https://spaceweather-proxy.ssb050627.workers.dev/';

fetch(ARI_URL)
  .then((response) => response.json())
  .then((data) => {
    const kindex = data.Kindex;
    const time = kindex.Time;
    const kp = kindex.CurrentP;
    const kk = kindex.CurrentK;
    const maxP = kindex.Max24P;
    const maxK = kindex.Max24K;

    console.log(time);
    console.log(kp);
    console.log(kk);
    console.log(maxP);
    console.log(maxK);
  })

  .catch((error) => {
    console.error('데이터 요청 오류:', error);
  });
