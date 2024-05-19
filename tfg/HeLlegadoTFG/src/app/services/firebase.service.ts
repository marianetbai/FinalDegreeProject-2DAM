import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  forestore = inject(AngularFirestore);

  //================================= AUTENTICACIÓN ====================================


  //======== ACCEDER ========
  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //======== CREAR usuario ========

  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //====== ACTUALIZAR usuario =======
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName});
  }

  //====== ENVIAR email para RECUPERAR CONTRASEÑA ======
  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  //======== Base de datos ========
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  //======== Obtener un documento =======
  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data();
  }
}
