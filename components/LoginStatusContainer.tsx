"use client";
import React, { useState } from "react";

const LoginStatusContainer = () => {
    const [loginStatusText, setLoginStatusText] = useState<string | null>(
        "Please enter your details"
    );

    return (
        <div>
            <p>Status: {loginStatusText}</p>
        </div>
    );
};

export default LoginStatusContainer;
