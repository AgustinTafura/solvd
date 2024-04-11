class DataTransformer {

    static addValues(a, b) {
        const allowedTypes = ['number', 'string', 'bigint']
        if (allowedTypes.includes(typeof a) && allowedTypes.includes(typeof b) && /^[\d.]+$/.test(a)  && /^[\d.]+$/.test(b)) {
            const numA = parseFloat(a);
            const numB = parseFloat(b);
    
            if (!isNaN(numA) && !isNaN(numB) && /^[\d.]+$/.test(numB)) {
                return numA + numB;
            } else {
                throw new Error('Addition not possible for the provided types.');
            }   
        } else {
            throw new Error('Addition not possible for the provided types.');
        }
    }

    static stringifyValue(value) {
        if (typeof value === 'object' || Array.isArray(value)) {
            return JSON.stringify(value);
        } else {
            return String(value);
        }
    }

    static invertBoolean(value) {
        if (typeof value === 'boolean') {
            return !value;
        } else {
            throw new Error('Input is not a boolean.');
        }
    }

    static convertToNumber(value) {
        if (typeof value === 'string') {
            const num = parseFloat(value);
            if (!isNaN(num)) {
                return num;
            }
        } else if (typeof value === 'boolean') {
            return value ? 1 : 0;
        } else if (!isNaN(value)) {
            return Number(value);
        } else {
            throw new Error('Conversion to number not possible.');
        }
    }

    static coerceToType(value, type) {
        try {
            let typeStringify;

            if (typeof type === 'function') {
                typeStringify = type.name.toLowerCase();
            } else if (typeof type === 'undefined') {
                typeStringify = 'undefined';
            } else if (type === null) {
                typeStringify = 'null';
            } else {
                typeStringify = type.toLowerCase();
            }

            switch (typeStringify) {
                case 'number':
                    return this.convertToNumber(value);
                case 'string':
                    return this.stringifyValue(value);
                case 'boolean':
                    return Boolean(value);
                case 'bigint':
                    return BigInt(value);
                case 'symbol':
                    return Symbol(value);
                case 'null':
                    return null;
                case 'undefined':
                    return undefined;
                default:
                throw new Error('Unsupported type.');
            }
        } catch (error) {
            throw new Error(`Coerce to type not possible. ${error.message}`);
        }
    }
}

export default DataTransformer;
