import { firestore } from "firebase-admin";

const converter = <T>() => ({
    toFirestore: (data: Partial<T>) => data,
    fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) => snap.data() as T
})
const dataPoint = <T>(collectionPath: string) => firestore().collection(collectionPath).withConverter(converter<T>());

export default dataPoint;
