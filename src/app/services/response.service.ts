import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  collection:any = "response_app";
  dataUpdate = [];

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore
  ) { }

  // getResponse(idQuestion,idDocumentFire){
  //   return this.afs.collection(this.collection).doc(idDocumentFire).valueChanges();
  // }
  getResponse(idDocumentFire){
    return this.afs.collection(this.collection).doc(idDocumentFire).valueChanges();
  }
  addResponse(data){
    return this.afs.collection(this.collection).add( JSON.parse(JSON.stringify(data))).then((data) =>{
      localStorage.setItem("id_response",data.id);
    });
  }

  updateResponse(data){
    let idDocumentFire = localStorage.getItem('id_response');
    return this.afs.collection(this.collection).doc(idDocumentFire).update({
      questions: data.questions,
      state: data.state,
      end_date: data.end_date
    });
  }

  updateResponsew(idDocumentFire,data,type,idQuestion){

    console.log(idDocumentFire);

    if(type  == "add") {
       return this.afs.collection(this.collection).doc(idDocumentFire).set( JSON.parse(JSON.stringify(data)) );
    } else {

      this.dataUpdate[idQuestion] = data.question[idQuestion];
      
      return this.afs.collection(this.collection).doc(idDocumentFire).update({
        question: this.dataUpdate[idQuestion]
      });

      //return this.afs.collection(this.collection , ref => ref.where('id', '==', idQuestion)).doc(idDocumentFire).update( JSON.parse(JSON.stringify(data)) );
    }

  }

  getQuizAllResponse(id){
    return this.afs.collection(this.collection, ref => ref.where('id_quiz', '==', id)).valueChanges({idField: 'idDocument'});
  }

  
}
