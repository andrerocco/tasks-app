export const getDatesRange = (
    start: Date,
    beforeAmount: number,
    afterAmount: number,
): Array<{ date: Date; isToday: boolean }> => {
    if (!(start instanceof Date)) {
        throw new Error('Error while getDatesRange. Start date must be a Date object');
    }
    if (typeof beforeAmount !== 'number' || typeof afterAmount !== 'number') {
        throw new Error('Error while getDatesRange. Before and after amount must be a number');
    }

    const today = new Date();
    const dates: Array<{ date: Date; isToday: boolean }> = [];

    const endDate = new Date(start);
    endDate.setDate(endDate.getDate() + afterAmount);
    start.setDate(start.getDate() - beforeAmount);

    while (start <= endDate) {
        dates.push({ date: new Date(start), isToday: start.toDateString() === today.toDateString() });
        start.setDate(start.getDate() + 1);
    }

    return dates;
};

export const getWeekdayString = (date: Date, size: 'short' | 'medium' | 'long' = 'long'): string => {
    if (!(date instanceof Date)) {
        throw new Error('Error while getWeekdayString. Date must be a Date object');
    }
    if (typeof size !== 'string') {
        throw new Error('Error while getWeekdayString. Size must be a string');
    }

    const weekdays = {
        short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
        medium: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
        long: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
    };
    return weekdays[size][date.getDay()];
};
