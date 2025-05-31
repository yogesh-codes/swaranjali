export const displayHourTime = (date: Date) => {
    if (!date) {
        return;
    }

    return `${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
    ).padStart(2, "0")}`;
};
