import { useLayoutEffect, useState, useEffect } from "react";
import Layout from "./Layout"
import Hero from "./components/Hero";
import { Box, Fade } from "@mui/material";

const Page = () => {
    const [currentOverflow, setCurrentOverflow] = useState("hidden");
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.body.style.overflowY = currentOverflow;
    }, [currentOverflow]);

    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <Layout>
           <Hero setCurrentOverflow={setCurrentOverflow} />
        </Layout>
    )
}

export default Page