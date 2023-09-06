import { localServ } from "../service/localStoreService";

export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjIzLzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMzI4OTYwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAzNDM3MjAwfQ.sBEpBy6NEqrSq0edQmAlMTJtoOz9ZG_Dam5-tGYZG5M";

export const ACCESS_TOKEN = `Bearer ${localServ.getAccessToken()}`;
