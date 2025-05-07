import { useState, useEffect } from "react";
import quizService from "../../service/quizService";
import { normalizeString } from "../../utils";
import Loader from "../loader";

const Quiz = () => {
    const [quizState, setQuizState] = useState({
        country: "",
        userAnswer: "",
        result: "",
        correctCapital: ""
      });
      const [loader, setLoader] = useState(true);
    
      useEffect(() => {
        getRandomCountry();
      }, []);
    
      const getRandomCountry = async () => {
        try {
          setLoader(true);
          const response = await quizService.getRandomCountry();
          if (response) {
            setQuizState({
              country: response?.country,
              userAnswer: "",
              result: "",
              correctCapital: ""
            });
          }
        } catch (error) {
          console.error("Error fetching random country:", error);
        } finally{
          setLoader(false);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoader(true);
          const response = await quizService.getCapital({ country: quizState.country });
          if (response) {
            const isCorrect = normalizeString(response.capital) === normalizeString(quizState.userAnswer);
            setQuizState((prevState) => ({
              ...prevState,
              result: isCorrect ? "Correct!" : "Incorrect!",
              correctCapital: isCorrect ? "" : response.capital
            }));
          }
        } catch (error) {
          console.error("Error fetching capital:", error);
        } finally {
          setLoader(false);
        }
      };
    
      const handleNext = () => {
        getRandomCountry();
      };
    
      return (
        <>
        <div className="container mt-5">
          <div className="card p-4 shadow">
            {loader && <Loader />}
            <form onSubmit={handleSubmit}>
              <h3 className="mb-3">What is the capital of {quizState.country}?</h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your answer"
                  value={quizState.userAnswer}
                  required={true}
                  onChange={(e) => setQuizState({ ...quizState, userAnswer: e.target.value })}
                />
                <button type="submit" className="btn btn-success ml-1">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-primary ms-2"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </form>
    
            {quizState.result && (
              <div
                className={`alert mt-3 ${
                  quizState.result === "Correct!" ? "alert-success" : "alert-danger"
                }`}
              >
                {quizState.result}
                {quizState.result === "Incorrect!" && quizState.correctCapital && (
                  <p>The correct answer is: <span style={{ color: "green" }}>{quizState.correctCapital}</span></p>
                )}
              </div>
            )}
          </div>
        </div>
        </>
      );
}
export default Quiz;