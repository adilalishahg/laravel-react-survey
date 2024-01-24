import React, { useState } from "react";
import PageComponent from "../components/PageComponent";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";
const SurveyView = () => {
    const [survey, setSurvey] = useState({
        title: "",
        slug: "",
        status: false,
        description: "",
        image: null,
        image_url: null,
        expire_date: "",
        questions: [],
    });
    function onSubmit() {
        onSubmit;
    }
    function onImageChange() {
        onImageChange;
    }
    return (
        <PageComponent title="Create New Survey">
            <form action="#" method="POST" onSubmit={onSubmit}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                        <div>
                            <label
                                htmlFor="photo"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Photo
                            </label>
                            <div className="flex items-center mt-2 gap-x-3">
                                {survey.image_url && (
                                    <img
                                        src={survey.image_url}
                                        alt="survey image"
                                        className="object-cover w-32 h-32"
                                    />
                                )}
                                {!survey.image_url && (
                                    <span className="flex items-center justify-center w-12 h-12 overflow-hidden text-gray-400 bg-gray-100 rounded-full">
                                        <UserCircleIcon
                                            className="w-12 h-12 text-gray-300"
                                            aria-hidden="true"
                                        />
                                    </span>
                                )}
                                <button
                                    type="button"
                                    className="relative px-3 py-2 mt-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <input
                                        type="file"
                                        className="absolute top-0 bottom-0 left-0 right-0 opacity-0 "
                                        onChange={onImageChange}
                                    />
                                    Change
                                </button>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Survey Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                onChange={(e) =>
                                    setSurvey({
                                        ...survey,
                                        title: e.target.value,
                                    })
                                }
                                value={survey.title}
                                placeholder="survey title"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-50"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Survey Description
                            </label>
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                onChange={(e) =>
                                    setSurvey({
                                        ...survey,
                                        description: e.target.value,
                                    })
                                }
                                value={survey.description}
                                placeholder="survey description"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-50"
                            ></textarea>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Survey TDescription
                            </label>
                            <input
                                type="date"
                                name="expire_date"
                                id="expire_date"
                                onChange={(e) =>
                                    setSurvey({
                                        ...survey,
                                        expire_date: e.target.value,
                                    })
                                }
                                value={survey.expire_date}
                                placeholder="survey expire_date"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-50"
                            />
                        </div>
                        <div className="flex itens-star">
                            <div className="flex items-center h-5">
                                <input
                                    id="status"
                                    name="status"
                                    type="checkbox"
                                    checked={survey.status}
                                    onChange={(e) =>
                                        setSurvey({
                                            ...survey,
                                            status: e.target.checked,
                                        })
                                    }
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="comments"
                                className="font-medium text-gray-700"
                            >
                                Active
                            </label>
                            <p className="text-gray-500">
                                Whether to make survey available for public
                            </p>
                        </div>
                    </div>
                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <TButton>Save</TButton>
                    </div>
                </div>
            </form>
        </PageComponent>
    );
};

export default SurveyView;
