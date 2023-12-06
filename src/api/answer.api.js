import axios from "axios"

export const answerSurvey = async (id, optionSelected)=> {
    try {
        return await axios.post(`https://higherorlower-whatdoyouprefer.onrender.com/answer/${id}`, {
            optionSelected
        });
    } catch (error) {
        console.log(error);
    }
}
export const countVotes = async (surveyId)=> {
    try {
        return await axios.get(`https://higherorlower-whatdoyouprefer.onrender.com/answer/${surveyId}`);
    } catch (error) {
        console.log(error);
    }
}