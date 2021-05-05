console.clear();
type ModernResponse = { metadata: MetaData; body: unknown };
type MetaData = { apiVersion: string; callStatus: number };
type ValidationRule = { propName: string; propType: string };

class ApiModelValidator {
    public validate(o: ModernResponse | any): boolean {
        return this.isModernResponseObject(o) && this.isMetadataObject(o.metadata);
    }

    private isModernResponseObject(o: ModernResponse | unknown): o is ModernResponse {
        const properties: ValidationRule[] = [
            { propName: 'metadata', propType: 'object' },
            { propName: 'body', propType: 'object' },
        ];
        return hasPropertyType(o, properties);
    }

    private isMetadataObject(o: MetaData | unknown): o is MetaData {
        const properties: ValidationRule[] = [
            { propName: 'apiVersion', propType: 'number' },
            { propName: 'callStatus', propType: 'number' },
        ];
        return !!o && hasPropertyType(o, properties);
    }
}

function hasPropertyType<t>(o: any, props: ValidationRule[]): boolean {
    let returnValue = true;
    props.forEach((x) => {
        if (o[x.propName] === undefined) {
            console.log('Property: ' + x.propName + ' does not exist on ', o);
            returnValue = false;
            return;
        } else if (typeof o[x.propName] !== x.propType) {
            console.log(
                'Property: ' +
                    x.propName +
                    ' was expected to be typeof: ' +
                    x.propType +
                    ' but was ' +
                    typeof o[x.propName]
            );
            returnValue = false;
            return;
        }
    });

    return returnValue;
}

// tests
let x = { metadata: { apiVersion: '2', callStatus: 2 }, body: {} };
let y = { metadata: { apiVersion: 2, callStatus: 2 }, body: {} };

let validator = new ApiModelValidator();

console.log(validator.validate(x));
console.log(validator.validate(y));
