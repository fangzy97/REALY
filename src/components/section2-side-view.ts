const sideViewData = [
  {
    nose_avg: { val: "1.749", bold: true },
    nose_med: { val: "1.704", bold: false },
    nose_std: { val: "0.343", bold: true },
    mouth_avg: { val: "1.411", bold: false },
    mouth_med: { val: "1.359", bold: false },
    mouth_std: { val: "0.395", bold: true },
    forehead_avg: { val: "2.074", bold: true },
    forehead_med: { val: "2.063", bold: true },
    forehead_std: { val: "0.486", bold: true },
    cheek_avg: { val: "1.528", bold: true },
    cheek_med: { val: "1.435", bold: false },
    cheek_std: { val: "0.517", bold: true },
    all_avg: { val: "1.691", bold: true },
    method: "Deep3D",
    link: "https://arxiv.org/pdf/1903.08527.pdf",
  },
  {
    nose_avg: { val: "1.827", bold: false },
    nose_med: { val: "1.783", bold: false },
    nose_std: { val: "0.383", bold: false },
    mouth_avg: { val: "1.409", bold: true },
    mouth_med: { val: "1.353", bold: true },
    mouth_std: { val: "0.418", bold: false },
    forehead_avg: { val: "2.248", bold: false },
    forehead_med: { val: "2.171", bold: false },
    forehead_std: { val: "0.508", bold: false },
    cheek_avg: { val: "1.665", bold: false },
    cheek_med: { val: "1.568", bold: false },
    cheek_std: { val: "0.644", bold: false },
    all_avg: { val: "1.787", bold: false },
    method: "MGCNet",
    link: "https://arxiv.org/pdf/2007.12494.pdf",
  },
  {
    nose_avg: { val: "1.883", bold: false },
    nose_med: { val: "1.865", bold: false },
    nose_std: { val: "0.499", bold: false },
    mouth_avg: { val: "1.642", bold: false },
    mouth_med: { val: "1.611", bold: false },
    mouth_std: { val: "0.501", bold: false },
    forehead_avg: { val: "2.465", bold: false },
    forehead_med: { val: "2.402", bold: false },
    forehead_std: { val: "0.622", bold: false },
    cheek_avg: { val: "1.781", bold: false },
    cheek_med: { val: "1.737", bold: false },
    cheek_std: { val: "0.636", bold: false },
    all_avg: { val: "1.943", bold: false },
    method: "3DDFA-v2",
    link: "https://arxiv.org/pdf/2009.09960.pdf",
  },
  {
    nose_avg: { val: "1.771", bold: false },
    nose_med: { val: "1.695", bold: true },
    nose_std: { val: "0.521", bold: false },
    mouth_avg: { val: "1.560", bold: false },
    mouth_med: { val: "1.542", bold: false },
    mouth_std: { val: "0.462", bold: false },
    forehead_avg: { val: "2.490", bold: false },
    forehead_med: { val: "2.429", bold: false },
    forehead_std: { val: "0.566", bold: false },
    cheek_avg: { val: "2.010", bold: false },
    cheek_med: { val: "1.913", bold: false },
    cheek_std: { val: "0.715", bold: false },
    all_avg: { val: "1.958", bold: false },
    method: "SADRNet",
    link: "https://arxiv.org/pdf/2106.03021.pdf",
  },
  {
    nose_avg: { val: "2.008", bold: false },
    nose_med: { val: "1.977", bold: false },
    nose_std: { val: "0.526", bold: false },
    mouth_avg: { val: "1.725", bold: false },
    mouth_med: { val: "1.700", bold: false },
    mouth_std: { val: "0.533", bold: false },
    forehead_avg: { val: "2.638", bold: false },
    forehead_med: { val: "2.582", bold: false },
    forehead_std: { val: "0.719", bold: false },
    cheek_avg: { val: "1.662", bold: false },
    cheek_med: { val: "1.566", bold: false },
    cheek_std: { val: "0.627", bold: false },
    all_avg: { val: "2.008", bold: false },
    method: "SynergyNet",
    link: "https://arxiv.org/pdf/2110.09772.pdf",
  },
  {
    nose_avg: { val: "1.868", bold: false },
    nose_med: { val: "1.813", bold: false },
    nose_std: { val: "0.510", bold: false },
    mouth_avg: { val: "1.856", bold: false },
    mouth_med: { val: "1.780", bold: false },
    mouth_std: { val: "0.607", bold: false },
    forehead_avg: { val: "2.445", bold: false },
    forehead_med: { val: "2.390", bold: false },
    forehead_std: { val: "0.570", bold: false },
    cheek_avg: { val: "1.960", bold: false },
    cheek_med: { val: "1.815", bold: false },
    cheek_std: { val: "0.731", bold: false },
    all_avg: { val: "2.032", bold: false },
    method: "PRNet",
    link: "https://arxiv.org/pdf/1803.07835.pdf",
  },
  {
    nose_avg: { val: "1.903", bold: false },
    nose_med: { val: "1.700", bold: false },
    nose_std: { val: "1.050", bold: false },
    mouth_avg: { val: "2.472", bold: false },
    mouth_med: { val: "2.348", bold: false },
    mouth_std: { val: "1.079", bold: false },
    forehead_avg: { val: "2.423", bold: false },
    forehead_med: { val: "2.308", bold: false },
    forehead_std: { val: "0.720", bold: false },
    cheek_avg: { val: "1.630", bold: false },
    cheek_med: { val: "1.456", bold: false },
    cheek_std: { val: "1.135", bold: false },
    all_avg: { val: "2.107", bold: false },
    method: "DECA-c",
    link: "https://arxiv.org/pdf/2012.04012.pdf",
  },
  {
    nose_avg: { val: "1.921", bold: false },
    nose_med: { val: "1.872", bold: false },
    nose_std: { val: "0.451", bold: false },
    mouth_avg: { val: "1.994", bold: false },
    mouth_med: { val: "1.955", bold: false },
    mouth_std: { val: "0.604", bold: false },
    forehead_avg: { val: "3.081", bold: false },
    forehead_med: { val: "2.979", bold: false },
    forehead_std: { val: "0.950", bold: false },
    cheek_avg: { val: "2.027", bold: false },
    cheek_med: { val: "1.929", bold: false },
    cheek_std: { val: "0.710", bold: false },
    all_avg: { val: "2.256", bold: false },
    method: "RingNet",
    link: "https://arxiv.org/pdf/1905.06817.pdf",
  },
  {
    nose_avg: { val: "2.286", bold: false },
    nose_med: { val: "2.065", bold: false },
    nose_std: { val: "1.103", bold: false },
    mouth_avg: { val: "2.684", bold: false },
    mouth_med: { val: "2.572", bold: false },
    mouth_std: { val: "1.041", bold: false },
    forehead_avg: { val: "2.519", bold: false },
    forehead_med: { val: "2.402", bold: false },
    forehead_std: { val: "0.718", bold: false },
    cheek_avg: { val: "1.555", bold: false },
    cheek_med: { val: "1.422", bold: true },
    cheek_std: { val: "0.822", bold: false },
    all_avg: { val: "2.261", bold: false },
    method: "DECA-f",
    link: "https://arxiv.org/pdf/2012.04012.pdf",
  },
  {
    nose_avg: { val: "2.508", bold: false },
    nose_med: { val: "2.453", bold: false },
    nose_std: { val: "0.491", bold: false },
    mouth_avg: { val: "2.160", bold: false },
    mouth_med: { val: "2.094", bold: false },
    mouth_std: { val: "0.448", bold: false },
    forehead_avg: { val: "3.393", bold: false },
    forehead_med: { val: "3.226", bold: false },
    forehead_std: { val: "1.076", bold: false },
    cheek_avg: { val: "1.842", bold: false },
    cheek_med: { val: "1.774", bold: false },
    cheek_std: { val: "0.609", bold: false },
    all_avg: { val: "2.476", bold: false },
    method: "ExpNet",
    link: "https://arxiv.org/pdf/1802.00542.pdf",
  },
];

sideViewData.forEach((val, index) => {
  Object.assign(val, { rank: index + 1 });
});

export { sideViewData };