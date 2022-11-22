import { Colors } from "src/theme/models";

function snakeCaseToCamelCase(text: string): keyof Colors | string {
  return text.toLowerCase().replace(/[-_][a-z0-9]/g, (group) => group.slice(-1).toUpperCase());
}

export default snakeCaseToCamelCase;



