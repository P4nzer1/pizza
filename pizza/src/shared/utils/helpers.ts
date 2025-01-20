export const isValidPhone = (value: string) =>
    /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/.test(value);

export const isValidCode = (value: string) =>
    /^\d{4}$/.test(value);

export const formatCode = (value: string) => {
    const digits = value.replace(/\D/g, '');
    const trimmed = digits.slice(0, 4);
    return trimmed
}

export const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (digits.length === 0) {
        return '';
    }
    if (!digits.startsWith('7')) {
        digits = '7' + digits;
    }
    if (digits.length > 11) {
        digits = digits.slice(0, 11);
    }
    let formatted = '+7';
    if (digits.length > 1) {
        formatted += ' ' + digits.slice(1, 4);
    }
    if (digits.length > 4) {
        formatted += ' ' + digits.slice(4, 7);
    }
    if (digits.length > 7) {
        formatted += '-' + digits.slice(7, 9);
    }
    if (digits.length > 9) {
        formatted += '-' + digits.slice(9, 11);
    }
    return formatted;
};

