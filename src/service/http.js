// class Http {
//   constructor(httpClient) {
//     this.http = httpClient;
//   }

//   async searchList(category) {
//     try {
//       const response = await this.http.get(category);
//       return response.data.chartList;
//     } catch {
//       throw new Error(`http 통신 오류`);
//     }
//   }

//   async searchDetail(id) {
//     try {
//       const response = await this.http.get(`detail/${id}`);
//       return response.data.chart;
//     } catch {
//       throw new Error(`http 통신 오류`);
//     }
//   }
// }

// export default Http;
