import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import { useStateContext } from "../contexts/ContextProvider";

const Surveys = () => {
    const { surveys } = useStateContext();
    return (
        <PageComponent title="Surveys">
            <div className="grid grid-col-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveyListItem survey={survey} key={survey.id} />
                ))}
            </div>
        </PageComponent>
    );
};

export default Surveys;
