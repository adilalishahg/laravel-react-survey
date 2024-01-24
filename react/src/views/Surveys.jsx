import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useStateContext } from "../contexts/ContextProvider";

const Surveys = () => {
    const { surveys } = useStateContext();
    const onDeleteClick = () => console.log("delete clicked");
    return (
        <PageComponent
            title="Surveys"
            button={
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="w-6 h-6 mr-2" /> Create new
                </TButton>
            }
        >
            <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveyListItem
                        survey={survey}
                        key={survey.id}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
            </div>
        </PageComponent>
    );
};

export default Surveys;
