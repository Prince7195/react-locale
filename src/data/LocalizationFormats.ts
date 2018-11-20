export const LocalizationFormats = {
    date: {
        'short': {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            formatMatcher: 'basic'
        },
        'long': {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            formatMatcher: 'basic'
        },
        yMMMd: {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            formatMatcher: 'basic'
        },
        yMMMMd: {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            formatMatcher: 'basic'
        }
    },
    time: {
        hours: {
            hour: 'numeric',
            hour12: true
        },
        'short': {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }
    },
    number: {
        CAD: {
            style: 'currency',
            currency: 'CAD',
            currencyDisplay: 'symbol'
        }
    }
};