
export interface IApi<V = Record<string, unknown>> {
  operationName: string;
  query: string;
  variables: V; // default type Record<string, unknown> if not provided
}
