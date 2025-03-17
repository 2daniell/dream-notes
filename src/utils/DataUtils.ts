const format = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric"};
    const formatted = new Intl.DateTimeFormat("pt-BR", options).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

const today = new Date();
const formattedDate = format(today);

export { formattedDate };