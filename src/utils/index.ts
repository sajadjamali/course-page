export function convertToPersianNumber(number: number): String {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

export const getLessText = (str: string): string => {
    if (str) {
        const words = str.split(' ');
        return words.length > 6 ? words.slice(0, 60).join(' ') : str;
    } else return '';
}