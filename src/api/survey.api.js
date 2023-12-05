import axios from "axios";

export const getRandomSurvey = async ()=> {
        const res = await axios.get('http://localhost:3000/survey/home')
        return res;
}