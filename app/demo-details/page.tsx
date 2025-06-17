import MyPageContent from "@/components/primitive/MyPageContent";
import { CardStack } from "./_components/cardStack";
import { projectFeatures } from "@/assets/websiteData";
import React from "react";

const page = () => {
    return (
        <section className="bg-primary">
            <MyPageContent>
                <div className="pt-30" />
                <div className="py-5">
                    <h1 className="py-3">Swaranjali- About the project</h1>

                    <p className="bg-accent">THIS APP IS UNDER DEVELOPMENT</p>
                    <h2 className="py-3">About</h2>
                    <p>This is a demo project by YogeshV. </p>
                </div>
                <hr />
                <div className="py-5">
                    <h2 className="py-3">Tech Stack And libraries Used</h2>
                    <ul>
                        <li>HTML CSS JS</li>
                        <li>React</li>
                        <li>NextJS</li>
                        <li>Framer Motion</li>
                    </ul>
                </div>
                <h2 className="pb-10">Features</h2>
                <CardStack
                    items={projectFeatures.map((item) => {
                        return {
                            id: item.id,
                            description: item.description,
                            title: item.title,
                        };
                    })}
                />
            </MyPageContent>
        </section>
    );
};

export default page;
