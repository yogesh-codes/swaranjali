export type TimelineDataProps = {
    id: string;
    performanceId: string;
    startDate?: Date;
    endDate?: Date;
};

export const timelineData: TimelineDataProps[] = [
    {
        id: "0",
        performanceId: "intro",
        startDate: new Date(2025, 11, 21, 18, 0, 0),
        endDate: new Date(2025, 11, 21, 18, 20, 0),
    },
    {
        id: "1",
        performanceId: "p1",
        startDate: new Date(2025, 11, 21, 18, 20, 0),
        endDate: new Date(2025, 11, 21, 18, 40, 0),
    },
    {
        id: "2",
        performanceId: "p2",
        startDate: new Date(2025, 11, 21, 18, 40, 0),
        endDate: new Date(2025, 11, 21, 19, 0, 0),
    },
    {
        id: "3",
        performanceId: "p3",
        startDate: new Date(2025, 11, 21, 19, 0, 0),
        endDate: new Date(2025, 11, 21, 19, 20, 0),
    },
    {
        id: "4",
        performanceId: "break",
        startDate: new Date(2025, 11, 21, 19, 20, 0),
        endDate: new Date(2025, 11, 21, 19, 40, 0),
    },
    {
        id: "5",
        performanceId: "p4",
        startDate: new Date(2025, 11, 21, 19, 40, 0),
        endDate: new Date(2025, 11, 21, 20, 0, 0),
    },
    {
        id: "6",
        performanceId: "p5",
        startDate: new Date(2025, 11, 21, 20, 0, 0),
        endDate: new Date(2025, 11, 21, 20, 20, 0),
    },
    {
        id: "7",
        performanceId: "p6",
        startDate: new Date(2025, 11, 21, 21, 20, 0, 0),
        endDate: new Date(2025, 11, 21, 21, 40, 0, 0),
    },
    {
        id: "8",
        performanceId: "concluding-remarks",
        startDate: new Date(2025, 11, 21, 21, 40, 0, 0),
        endDate: new Date(2025, 11, 21, 22, 0, 0, 0),
    },
];
