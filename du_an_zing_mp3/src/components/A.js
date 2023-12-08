import MenuSetting from "./MenuSetting";
import React, {useState} from "react";

export default function Test() {
    const [a, setA] = useState([1,2,3])

    return (
            <MenuSetting name = {a} />
        )

}