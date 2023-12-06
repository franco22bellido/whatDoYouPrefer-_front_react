import axios from "axios";

export const getRandomSurvey = async ()=> {
        const res = await axios.get('https://higherorlower-whatdoyouprefer.onrender.com/survey/home')
        return res;
}