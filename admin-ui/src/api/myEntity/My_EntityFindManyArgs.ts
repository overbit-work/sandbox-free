import { My_EntityWhereInput } from "./My_EntityWhereInput";
import { My_EntityOrderByInput } from "./My_EntityOrderByInput";

export type My_EntityFindManyArgs = {
  where?: My_EntityWhereInput;
  orderBy?: Array<My_EntityOrderByInput>;
  skip?: number;
  take?: number;
};
