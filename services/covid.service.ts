import axios from 'axios';

export class CovidService {
    async getCovidData(): Promise<Object> {
        const {data} = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
        const result = data.map((item: { dateChecked: Date; positive: Number; death: Number; hospitalized: Number; }) => {
            return {
                date: item.dateChecked,
                positive: item.positive,
                death: item.death,
                hospitalized: item.hospitalized,
            };
        });
        return result;
    }
}