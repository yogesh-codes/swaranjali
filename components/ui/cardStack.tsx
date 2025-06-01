"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: ReturnType<typeof setInterval>;

type CardData = {
    id: string;
    title: string;
    designation?: string;
    description: React.ReactNode;
};

export const CardStack = ({
    items,
    offset,
}: //scaleFactor,
{
    items: CardData[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    //const SCALE_FACTOR = scaleFactor || 0.06; //0.06;
    const [cards, setCards] = useState<CardData[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: CardData[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative  w-100 h-120">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute 
                        bg-nlight 
                        min-h-[320px] w-[260px]   
                        rounded-3xl 
                        p-4 shadow-xl 
                        border border-primary 
                        shadow-black/[0.1] 
                        flex flex-row align-stretch justify-start"
                        style={{
                            transformOrigin: "left",
                            translateX: "0%",
                            translateY: "0%",
                        }}
                        initial={{
                            left: 0,
                        }}
                        animate={{
                            left: index * CARD_OFFSET,
                            scale: 1, //+ index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                            rotateY: 0,
                        }}
                        transition={{ type: "spring" }}
                    >
                        <div className="font-normal  p-2 ">
                            {/* //text-neutral-700 */}
                            <p className="text-primary font-medium pb-3 ">
                                {card.title}
                            </p>
                            <p className="text-ndark">{card.description}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
