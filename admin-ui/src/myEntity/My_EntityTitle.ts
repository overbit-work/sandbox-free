import { My_Entity as TMy_Entity } from "../api/myEntity/My_Entity";

export const MY_ENTITY_TITLE_FIELD = "id";

export const My_EntityTitle = (record: TMy_Entity): string => {
  return record.id || String(record.id);
};
