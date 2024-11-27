import React, { useState } from "react";

export default function Calc() {
    const keyboard = [
        ["7", "8", "9", "+"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "*"],
        ["", "0", "", "/"],
    ]

    const [currentExpression, setCurrentExpression] = useState("");

    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                setCurrentExpression(eval(currentExpression).toString());
            } catch (error) {
                setCurrentExpression("Error");
            }
        } else {
            setCurrentExpression((prev) => prev + value);
        }
    };

    const renderKeyboard = (items) =>
        items.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row.map((key, keyIndex) => (
                    <td
                        key={keyIndex}
                        onClick={() => key && handleButtonClick(key)}
                        style={{
                            width: "50px",
                            height: "50px",
                            textAlign: "center",
                            verticalAlign: "middle",
                            border: "1px solid #ddd",
                            cursor: key ? "pointer" : "default",
                        }}
                    >
                        {key}
                    </td>
                ))}
            </tr>
        ));

    return <>
        <input
            type="text"
            value={currentExpression}
            readOnly
            style={{
                margin: "10px 0",
                fontSize: "18px",
                textAlign: "right",
                padding: "5px",
            }}
        />

        <table border={1} width={"100%"} style={{borderCollapse: "collapse"}}>
            <tbody>{renderKeyboard(keyboard)}</tbody>
        </table>
    </>
}