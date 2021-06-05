class Http {
    constructor(httpClient) {
        this.http = httpClient;
    }

    // 예시
    // async searchList(query) {
    //     const response = await this.http.get('url', {
    //         params: {
    //             param1: '1',
    //             param2: 2,
    //             q: query
    //             }
    //     });
    //     return response;
    // }

    // 국내/해외 category 에 따른 search, 1. 생성 된 url 확인, 2. 받아온 data 내용 확인
    async searchList(category) {
        try {
            const response = await this.http.get(category);
            return response;
        } catch {
            throw new Error(`http 통신 오류`);
        }
    }


    // 노래 제목 click 에 따른 detail search 1. 생성 된 url 확인, 2. 받아온 data 내용 확인
    async searchDetail(category) {
        try {
            const response = await this.http.get(`detail/${id}`);
            return response;
        } catch {
            throw new Error(`http 통신 오류`);
        }
    }


}

export default Http;