import { Inject, Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDocs, query, where, updateDoc, deleteDoc, DocumentData, collectionSnapshots } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { writeBatch } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  firestore: Firestore = inject(Firestore);

  constructor() {}

  async insert(collectionName: string, data: any): Promise<void> {
    const docRef = doc(collection(this.firestore, collectionName));
    data.id = docRef.id;
    await setDoc(docRef, data);
  }

  getFirestore() {
    return this.firestore;
  }

  async insertCustomID(collectionName: string, idCustom: any, data: any): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${idCustom}`);
    await setDoc(docRef, data);
  }

  getAll(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionSnapshots(colRef).pipe(
      map(actions => actions.map(a => {
        const data = a.data() as DocumentData;
        data['id']= a.id;
        return data;
      }))
    );
  }

  getByParameter(collectionName: string, parametro: string, value: any): Observable<any[]> {
    const colRef = collection(this.firestore, collectionName);
    const q = query(colRef, where(parametro, '==', value));
    return collectionSnapshots(q).pipe(
      map(actions => actions.map(a => {
        const data = a.data() as DocumentData;
        data['id'] = a.id;
        return data;
      }))
    );
  }

  async update(id: string, collectionName: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${id}`);
    await updateDoc(docRef, data);
  }

  async deleteCollection(collectionName: string): Promise<void> {
    const colRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(colRef);
    const batch = writeBatch(this.firestore);

    snapshot.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
  }

  async delete(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${id}`);
    await deleteDoc(docRef);
  }
}
