import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { blogPost } from '../interfaces/blogPost';
@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  blogPostCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { }

  getBlogPostCollection(): Observable<blogPost[]> {
    this.blogPostCollection = this.afs.collection('fl_content');
    return this.blogPostCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = <blogPost>a.payload.doc.data();
        data.id = a.payload.doc.id;
        return { ...data };
      }))
    );
  }
}
