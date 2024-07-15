interface Config {
  get(key: string): string | undefined;
}

class FieldManager {
  maxFieldCount: number;

  constructor(config: Config) {
    // Retrieve maxFieldCount from config or use a default value
    this.maxFieldCount = parseInt(config.get('maxFieldCount')) || 5;
  }

  showFields(fields: string[]): void {
    // Limit the fields to the specified maxFieldCount
    const fieldsToShow = fields.slice(0, this.maxFieldCount);
    fieldsToShow.forEach(field => {
      console.log(`Displaying field: ${field}`);
    });
  }
}

// Usage example:
const config: Config = {
  get: (key: string) => {
    // Example config retrieval logic
    const configs: { [key: string]: string } = {
      maxFieldCount: '3',
    };
    return configs[key];
  },
};

const manager = new FieldManager(config);
const allFields = ['field1', 'field2', 'field3', 'field4', 'field5'];

manager.showFields(allFields);
// Output:
// Displaying field: field1
// Displaying field: field2
// Displaying field: field3
