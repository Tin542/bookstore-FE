
export interface IApi<V = Record<string, unknown>> {
  operationName: string;
  query: string;
  variables: V;
}
