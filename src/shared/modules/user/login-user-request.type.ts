import { Request } from 'express';
import { RequestBody, RequestParams } from '../../libs/rest/index.js';
import { CreateUserDto } from './dto/create-user.dto.js';

export type LoginUserRequest = Request<
  RequestParams,
  RequestBody,
  CreateUserDto
>;
