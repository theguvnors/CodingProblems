console.clear();
type ModernResponse = { metadata: MetaData; body: unknown };
type MetaData = { apiVersion: string; callStatus: number };

class ApiModelValidator {
    public validate(o: ModernResponse | any): boolean {
        return this.isModernResponseObject(o) && this.isMetadataObject(o.metadata);
    }

    private isModernResponseObject(o: ModernResponse | unknown): o is ModernResponse {
        const properties = ['metadata', 'body'];
        return hasProperty(o, properties);
    }

    private isMetadataObject(o: MetaData | unknown): o is MetaData {
        const properties = ['apiVersion', 'callStatus'];
        return !!o && hasProperty(o, properties);
    }
}

function hasProperty<t>(o: any, props: string[]): boolean {
    props.forEach((x) => {
        if (o[x] === undefined) {
            console.log('Property: ' + x + ' does not exist on ', o);
            return false;
        }
    });

    return true;
}

// tests
let x = { metadata: null, body: null };
let y = { metadata: { apiVersion: '2' }, body1: {} };

let validator = new ApiModelValidator();

console.log(validator.validate(x));
console.log(validator.validate(y));
