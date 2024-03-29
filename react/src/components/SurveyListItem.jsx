import React from "react";
import {
    PencilIcon,
    ArrowTopRightOnSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import TButton from "./core/TButton";

const SurveyListItem = ({ survey, onDeleteClick }) => {
    return (
        <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
            <img
                src={survey.img_url}
                alt={survey.title}
                className="object-cover w-full h-48"
            />
            <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>
            <div
                dangerouslySetInnerHTML={{ __html: survey.description }}
                className="flex overflow-hidden"
            ></div>
            <div className="flex items-center justify-between mt-3">
                <TButton to={`/surveys/${survey.id}`}>
                    <PencilIcon className="w-5 h-5 mr-2" />
                    Edit
                </TButton>

                <div className="flex items-center">
                    <TButton href={`/view/survey/${survey.slug}`} circle link>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                    </TButton>
                    {survey.id && (
                        <TButton
                            onClick={onDeleteClick}
                            circle
                            link
                            color="red"
                        >
                            <TrashIcon className="w-5 h-5" />
                        </TButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SurveyListItem;
