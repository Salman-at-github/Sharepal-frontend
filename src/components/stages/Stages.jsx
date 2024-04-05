import React from "react";
import { formatDate } from "../../utils/helpers";

const Stages = ({ stages, currentStage, orderType }) => {
    const getStageColor = (stage) => {
        const stageIndex = stages.indexOf(stage);
        const currentStageIndex = stages.indexOf(currentStage);
        if (orderType === "cancelled") {
            if (stageIndex < currentStageIndex) return "green";
            if (stage.toLowerCase() === currentStage.toLowerCase()) return "red";
        } else {
            if (stageIndex <= currentStageIndex) return "green"; 
            return "gray";
        }

    };

    return (
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
            {stages.map((stage, index) => (
                <li
                    key={index}
                    className={`flex items-center  ${
                        index === stages.length - 1 ? "" : "sm:space-x-reverse"
                    }`}
                >
                    <span
                        className={`flex items-center justify-center w-8 h-8 mr-2 rounded-full`}
                        style={{border: `2px solid ${getStageColor(stage.stage)}`}}
                    >
                        {index + 1}
                    </span>
                    <span>
                        <h3
                            className={`font-semibold text-lg mb-1 leading-tight`} style={{color: `${getStageColor(
                                stage.stage
                            )}`}}
                        >
                            Order {stage.stage}
                        </h3>
                        <p className="text-sm">{formatDate(stage?.date)}</p>
                    </span>
                </li>
            ))}
        </ol>
    );
};

export default Stages;
