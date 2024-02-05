import { getAuthManager, serializeToFormData } from '@/utils';

import type { IMovieItemDto } from '@/data-transfer/dto';
import type {
  ICreateMovieRequest,
  IGetMovieRequest,
  IMoviesPaginationQuery,
  IUpdateMovieRequest,
} from '@/data-transfer/requests';
import type { IPaginationResponse, ISuccessResponse } from '@/data-transfer/responses';

/**
 * @function - Makes GET request to pull data about Movie records that match request params
 * @param params IMoviePaginationQuery - pagination, sorting, filters and query params
 * @returns IPaginationResponse<IMovieItemDto> - paginated response with Movie records
 */
const getMovies = async (params: IMoviesPaginationQuery) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .get<IPaginationResponse<IMovieItemDto>>('/movies', { params })
    .then((res) => res.data);

  return response;
};

/**
 * @function - Makes GET request to pull data about Movie record by id
 * @param params IGetMovieRequest - movie id string
 * @returns IMovieItemDto - dto response with Movie record
 */
const getMovie = async ({ movieId }: IGetMovieRequest) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .get<IMovieItemDto>(`/movies/${movieId}`)
    .then((res) => res.data);

  return response;
};

/**
 * @function - Makes POST request to create Movie item
 * @param params ICreateMovieRequest - Movie form data
 * @returns IProfileMovieDto - created Movie data response
 */
const createMovie = async ({ file, posterImageUri, ...params }: ICreateMovieRequest) => {
  const fd = serializeToFormData(params);
  if (!!file?.length) {
    fd.append('image', file[0]);
  }

  const auth = await getAuthManager();
  const response = await auth.axios
    .post<IMovieItemDto>('/movies', fd, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data);

  return response;
};

/**
 * @function - Makes PUT request to update Movie item
 * @param params IUpdateMovieRequest - Movie form data
 * @returns IProfileMovieDto - updated Movie data response
 */
const updateMovie = async ({ id, file, posterImageUri, ...params }: IUpdateMovieRequest) => {
  const fd = serializeToFormData(params);

  if (!!file?.length) {
    fd.append('image', file[0]);
  }

  const auth = await getAuthManager();
  const response = await auth.axios
    .patch<IMovieItemDto>(`/movies/${id}`, fd, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data);

  return response;
};

/**
 * @function - Makes DELETE request to delete Movie item
 * @param id - Movie id string
 * @returns id - Movie id string
 */
const deleteMovie = async (id: string) => {
  const auth = await getAuthManager();
  await auth.axios.delete<ISuccessResponse>(`/movies/${id}`).then((res) => res.data);

  return id;
};

const moviesService = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
export default moviesService;
