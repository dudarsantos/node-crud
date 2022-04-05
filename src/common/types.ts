import * as core from "express-serve-static-core";

export interface Query extends core.Query {}

export interface PaginationQuery extends Query {
  page:string;
  size:string;
}