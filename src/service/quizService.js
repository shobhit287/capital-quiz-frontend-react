import api from ".";
const quizService = {
    getRandomCountry: async() => {
        try {
          const response = await api.get("/random-country");
          return response?.data;
        } catch(error) {
            return error;
        }
    },
    getCapital: async(data) => {
        try {
          const response = await api.post("/get-capital", data);
          return response?.data;
        } catch(error) {
            return error;
        }
    }
}
export default quizService;