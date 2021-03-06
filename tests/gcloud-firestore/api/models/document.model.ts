/* tslint:disable */

/**
 * A Firestore document.
 * 
 * Must not exceed 1 MiB - 4 bytes.
 */
export interface Document {
  createTime: string;  // Output only. The time at which the document was created.This value increases monotonically when a document is deleted thenrecreated. It can also be compared to values from other documents andthe `read_time` of a query.
  fields: any;  // The document's fields.The map keys represent field names.A simple field name contains only characters `a` to `z`, `A` to `Z`,`0` to `9`, or `_`, and must not start with `0` to `9`. For example,`foo_bar_17`.Field names matching the regular expression `__.*__` are reserved. Reservedfield names are forbidden except in certain documented contexts. The mapkeys, represented as UTF-8, must not exceed 1,500 bytes and cannot beempty.Field paths may be used in other contexts to refer to structured fieldsdefined here. For `map_value`, the field path is represented by the simpleor quoted field names of the containing fields, delimited by `.`. Forexample, the structured field`"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would berepresented by the field path `foo.x&y`.Within a field path, a quoted field name starts and ends with `` ` `` andmay contain any character. Some characters, including `` ` ``, must beescaped using a `\`. For example, `` `x&y` `` represents `x&y` and`` `bak\`tik` `` represents `` bak`tik ``.
  name: string;  // The resource name of the document, for example`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
  updateTime: string;  // Output only. The time at which the document was last changed.This value is initally set to the `create_time` then increasesmonotonically with each change to the document. It can also becompared to values from other documents and the `read_time` of a query.
}
