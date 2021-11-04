import { firestore } from 'firebase-admin';

export type Timestamp = firestore.Timestamp;

export type DocumentData = firestore.DocumentData;

export type QuerySnapshot<T> = firestore.QuerySnapshot<T>;

export type QueryDocumentSnapshot<T> = firestore.QueryDocumentSnapshot<T>;

export type DocumentSnapshot<T> = firestore.DocumentSnapshot<T>;

export type DocumentReference<T> = firestore.DocumentReference<T>;

export type WriteResult = firestore.WriteResult;

export type CollectionGroup<T> = firestore.CollectionGroup<T>;

export type CollectionReference<T> = firestore.CollectionReference<T>;
