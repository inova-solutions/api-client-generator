/* tslint:disable */
import {
  Document,
} from './..';

/**
 * The streamed response for Firestore.BatchGetDocuments.
 */
export interface BatchGetDocumentsResponse {
  found: Document;  // A document that was requested.
  missing: string;  // A document name that was requested but does not exist. In the format:`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
  readTime: string;  // The time at which the document was read.This may be monotically increasing, in this case the previous documents inthe result stream are guaranteed not to have changed between theirread_time and this one.
  transaction: string;  // The transaction that was started as part of this request.Will only be set in the first response, and only ifBatchGetDocumentsRequest.new_transaction was set in the request.
}
