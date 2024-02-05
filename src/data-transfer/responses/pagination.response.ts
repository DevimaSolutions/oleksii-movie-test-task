export interface IPaginationResponse<T> {
  data: T[];
  hasMore: boolean;
  page: number;
  perPage: number;
  total: number;
}
