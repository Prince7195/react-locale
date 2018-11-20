export const getLanguage = (id: string): string => {
    const root = document.getElementById(id);
    const dataSet = root.dataset;
    const lang: string = dataSet.lang;
    return lang;
}