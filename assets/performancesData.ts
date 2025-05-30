import p1Image from "@/assets/images/artists/p1.png";
import p2Image from "@/assets/images/artists/p2.png";
import p3Image from "@/assets/images/artists/p3.png";
import p4Image from "@/assets/images/artists/p4.png";
import p5Image from "@/assets/images/artists/p5.png";
import p6Image from "@/assets/images/artists/p6.png";
import { StaticImageData } from "next/image";

type ArtistType = {
    name: string;
    role: string;
    bio: string;
};

type PerformanceDataType = {
    id: string;
    title: string;
    artists: ArtistType[];
    description: string;
    durationMinutes: number;
    photoHref: StaticImageData | string;
};

export const performancesData: PerformanceDataType[] = [
    {
        id: "p1",
        title: "Hindustani Vocal Recital",
        artists: [
            {
                name: "Arjun Sharma",
                role: "Vocalist",
                bio: "Arjun Sharma was trained in the Gwalior gharana lineage and is known for his deeply emotive alap.",
            },
            {
                name: "Riya Kapoor",
                role: "Tabla",
                bio: "Riya Kapoor is an acclaimed accompanist who specializes in intricate rhythmic interplay.",
            },
        ],
        description:
            "A concise exploration of Raga Yaman, featuring an alap-jor-jhala segment and a brisk bandish in teental.",
        durationMinutes: 10,
        photoHref: p1Image,
    },
    {
        id: "p2",
        title: "Carnatic Classical Concert",
        artists: [
            {
                name: "Meera Kannadasan",
                role: "Vocalist",
                bio: "Meera Kannadasan was mentored at the Southern Harmony Music Academy and is celebrated for her precise gamakas.",
            },
            {
                name: "Karan Verma",
                role: "Mridangam",
                bio: "Karan Verma is a seasoned accompanist from the Carnatic Harmony Institute, renowned for his dynamic tani avartanams.",
            },
            {
                name: "Dharnesh Iyer",
                role: "Violin",
                bio: "Dharnesh Iyer is principal violinist at the Carnatic Melody Conservatory and is noted for his expressive sahityam.",
            },
            {
                name: "Anjali Nair",
                role: "Ghatam",
                bio: "Anjali Nair is a versatile clay pot percussionist from the Melody Percussion School.",
            },
        ],

        description:
            "A compact Carnatic set of a varnam and a kriti—Endaro Mahanubhavulu—accompanied by full percussion and melodic support.",
        durationMinutes: 10,
        photoHref: p2Image,
    },

    {
        id: "p3",
        title: "Kathak Dance",
        artists: [
            {
                name: "Priya Desai",
                role: "Dancer",
                bio: "Priya Desai is a Lucknow gharana soloist celebrated for her graceful abhinaya and precise footwork, trained at the Kathak Excellence Institute.",
            },
            {
                name: "Rahul Singh",
                role: "Dancer",
                bio: "Rahul Singh is a Jaipur gharana specialist known for his dynamic chakkars and powerful tatkars, studied at the Kathak Heritage Academy.",
            },
            {
                name: "Kavita Rao",
                role: "Dancer",
                bio: "Kavita Rao is an emerging Banaras gharana prodigy renowned for her expressive storytelling, trained at the Kathak Heritage Academy.",
            },
            {
                name: "Manav Gupta",
                role: "Dancer",
                bio: "Manav Gupta is the ensemble lead from the Lucknow gharana, praised for his intricate footwork and emotive expressions, educated at the Kathak Excellence Institute.",
            },
            {
                name: "Sneha Joshi",
                role: "Dancer",
                bio: "Sneha Joshi is a junior ensemble dancer from the Jaipur gharana, noted for her crisp bols and vibrant stage presence, trained at the Kathak Heritage Academy.",
            },
            {
                name: "Aarav Mehta",
                role: "Dancer",
                bio: "Aarav Mehta is a junior ensemble artist from the Banaras gharana, recognized for his precise rhythms and nuanced abhinaya, educated at the Kathak Excellence Institute.",
            },
        ],
        description:
            "An ensemble Kathak piece weaving expressive abhinaya and rhythmic tatkars, supported by a six-piece orchestra.",
        durationMinutes: 10,
        photoHref: p3Image,
    },

    {
        id: "p4",
        title: "Bharatanatyam Dance Recital",
        artists: [
            {
                name: "Nithya Rao",
                role: "Dancer",
                bio: "Nithya Rao is a recipient of the National Dance Excellence Award and trained at the Tamil Nadu Center for Classical Dance.",
            },
            {
                name: "Aaradhya Singh",
                role: "Dancer",
                bio: "Aaradhya Singh is an emerging talent noted for her precise footwork, educated at the Chennai School of Dance Arts.",
            },
            {
                name: "Divya Kanthaswamy",
                role: "Dancer",
                bio: "Divya Kanthaswamy is known for her expressive storytelling, and trained at the Tamil Nadu Center for Classical Dance.",
            },
            {
                name: "Shweta Iyer",
                role: "Nattuvanar",
                bio: "Shweta Iyer is an expert in live sollukattu recitations and serves as conductor for the Dance Rhythm Guild.",
            },
        ],
        description:
            "A 10-minute Bharatanatyam vignette covering Alarippu through Tillana, with live Carnatic accompaniment.",
        durationMinutes: 10,
        photoHref: p4Image,
    },
    {
        id: "p5",
        title: "Shabad Kirtan Ensemble",
        artists: [
            {
                name: "Jaspreet Singh",
                role: "Lead Ragi",
                bio: "Jaspreet Singh is a devotional vocalist trained in Sikh kirtan traditions at the Sacred Hymn Conservatory.",
            },
            {
                name: "Sheela Kaur",
                role: "Ragi Vocalist",
                bio: "Sheela Kaur is known for her deep, resonant harmony and studied at the Devotional Music Academy.",
            },
            {
                name: "Amarjeet Gill",
                role: "Tabla",
                bio: "Amarjeet Gill is an acclaimed devotional accompanist educated at the Rhythm of Faith Institute.",
            },
            {
                name: "Satnam Kaur",
                role: "Harmonium",
                bio: "Satnam Kaur provides melodic support rooted in classical raag frameworks and is alumna of the Melody in Devotion School.",
            },
        ],
        description:
            "A soulful 10-minute Shabad Kirtan session featuring sacred hymns in traditional raag forms.",
        durationMinutes: 10,
        photoHref: p5Image,
    },
    {
        id: "p6",
        title: "Punjabi Folk Bhangra & Giddha Ensemble",
        artists: [
            {
                name: "Harman Gill",
                role: "Bhangra Choreographer",
                bio: "Harman Gill leads a renowned Punjab folk troupe and is celebrated for his energetic choreography.",
            },
            {
                name: "Gurleen Kaur",
                role: "Bhangra Performer",
                bio: "Gurleen Kaur is celebrated for her vibrant bhangra and giddha routines and trained at the Folk Dance Collective.",
            },
            {
                name: "Jagdeep Singh",
                role: "Dhol Percussionist",
                bio: "Jagdeep Singh is a virtuoso dhol player with over 15 years of folk percussion experience at the Punjab Rhythm Academy.",
            },
            {
                name: "Harjit Dhillon",
                role: "Bugchu Percussionist",
                bio: "Harjit Dhillon is a specialist in Punjabi percussion textures educated at the Folk Percussion Society.",
            },
            {
                name: "Hariharan Bains",
                role: "Algoza Player",
                bio: "Simran Bains is an expert in traditional double-flute tunes and studied at the Melodic Winds Institute.",
            },
        ],
        description:
            "A high-energy 10-minute folk segment blending Bhangra and Giddha with synchronized beats and claps.",
        durationMinutes: 10,
        photoHref: p6Image,
    },
];
