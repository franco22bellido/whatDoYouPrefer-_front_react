import axios from "axios"

export const answerSurvey = async (id, optionSelected)=> {
    try {
        return await axios.post(`http://localhost:3000/answer/${id}`, {
            optionSelected
        });
    } catch (error) {
        console.log(error);
    }
}
export const countVotes = async (surveyId)=> {
    try {
        return await axios.get(`http://localhost:3000/answer/${surveyId}`);
    } catch (error) {
        console.log(error);
    }
}